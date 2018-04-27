import axios from 'axios'

export const fetchBear = function() {
  return (dispatch) => {
    axios.get('http://localhost:8000/api/bears')
    .then( (response) => {
      dispatch({type:"FETCH_BEAR", payload:response.data});
      })
      .catch( (error) => {
      });
  }
}

export const deleteBear = function(id) {
  console.log(id)
  return (dispatch) => {
    axios.delete(`http://localhost:8000/api/bears/${id}`)
    .then((res) => {
      dispatch({type:"DELETE_BEAR",payload:res.data})
    })
  }
}

export const addBear = function(name) {
  return (dispatch) => {
    axios.post(`http://localhost:8000/api/bears/`,{
      name
    })
    .then((res) => {
      return fetchBear()(dispatch)
    })
    
  }
}
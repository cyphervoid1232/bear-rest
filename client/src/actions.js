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
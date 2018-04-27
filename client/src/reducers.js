import { combineReducers  } from 'redux';

let reducers = function(state = [], actions){
  if(actions){
    if(actions.type === "FETCH_BEAR"){
      return actions.payload
    }
    if(actions.type === "DELETE_BEAR"){
      console.log('delete')
      return actions.payload
    }
    if(actions.type === "ADD_BEAR") {
      console.log("add")
      
    }
  }
  return state;
}



export default combineReducers({
  bear:reducers
})

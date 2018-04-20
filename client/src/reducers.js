import { combineReducers  } from 'redux';

let reducers = function(state = [], actions){
  if(actions){
    if(actions.type == "FETCH_BEAR"){
      return actions.payload
    }
  }
  return state;
}



export default combineReducers({
  bear:reducers
})

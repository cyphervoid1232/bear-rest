import React, { Component } from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers  } from 'redux';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let reducer = function(state = [], actions){
  if(actions){
    if(actions.type == "FETCH_BEAR"){
      return actions.payload
    }
  }
  return state;
}

let store = createStoreWithMiddleware(combineReducers({
  bear:reducer
}));

let fetchBear = function() {
  return (dispatch) => {
    axios.get('http://localhost:8000/api/bears')
    .then( (response) => {
      dispatch({type:"FETCH_BEAR", payload:response.data});
      })
      .catch( (error) => {
      });
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data: []};
  }

  componentDidMount(){
    store.subscribe(() => {
      this.setState({data:store.getState().bear});
    })
    store.dispatch(fetchBear());
  }
  
  render() {
    let bears = this.state.data;
    return (
      <div>
      {
        bears.map(bear => (<div key={bear.id}>{bear.name}</div>))
      }
      </div>
    );
  }
}

export default App;

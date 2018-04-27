import React, { Component } from 'react';
import {fetchBear} from './actions'
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data: []};
  }

  componentDidMount(){
    this.props.fetchBear()
  }

  render() {
    let bears = this.props.bears;
    return (
      <div>
      {
        bears.map(bear => (<div key={bear.id}>{bear.name}</div>))
      }
      </div>
    );
  }
}


const  mapStateToProps = (state) =>{
    return {
      bears: state.bear
    }
  }

 const mapDispatchToProps = (dispatch) => {
    return {
      fetchBear : () => dispatch(fetchBear())
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(App);

import React, { Component } from 'react';
import {fetchBear,deleteBear} from './actions'
import {connect} from 'react-redux'

const Bear = ({id,name,handleDelete}) => (
  <div>
    {name}
    <button onClick={() => handleDelete(id)}>delete</button>
  </div>
)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data: []};
  }

  componentDidMount(){
    this.props.fetchBear()
  }

  handleDelete = (id) =>{
    this.props.deleteBear(id)
  }

  render() {
    let bears = this.props.bears;
    return (
      <div>
      {
        bears.map(bear => <Bear {...bear} handleDelete={this.handleDelete}/>)
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
      fetchBear : () => dispatch(fetchBear()),
      deleteBear : (id) => dispatch(deleteBear(id))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(App);

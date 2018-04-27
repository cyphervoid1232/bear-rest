import React, { Component } from 'react';
import {fetchBear,deleteBear,addBear} from './actions'
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
    this.state = {data: [],name:''};
  }

  componentDidMount(){
    this.props.fetchBear()
  }

  handleDelete = (id) =>{
    this.props.deleteBear(id)
  }

  handleAdd = () =>{
    this.props.addBear(this.state.name)
  }

  handleChange = (event) => {
    this.setState({name:event.target.value})
  }

  render() {
    let bears = this.props.bears;
    return (
      <div>
      {
        bears.map(bear => <Bear {...bear} handleDelete={this.handleDelete}/>)
      }
      <input type="text" onChange={this.handleChange}/>
      <button onClick={this.handleAdd}>AddBear</button>
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
      deleteBear : (id) => dispatch(deleteBear(id)),
      addBear : (name) => dispatch(addBear(name))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(App);

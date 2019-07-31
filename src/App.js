import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import ItemCreation from './Components/ItemCreation.js'
import ItemList from './Components/ItemList'
import NavBar from './Components/NavBar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
        }
}

componentDidMount = () => {
  this.loadData()
}

loadData = () => {

  axios.get('http://localhost:5000/item/all').then(res => {
    this.setState({
      data:res.data
    })
  })

}

  render(){
  return (
    <div >
      <NavBar />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <ItemCreation passedFunction={this.loadData}/>
      </div>
      <ItemList passedFunction={this.loadData} data={this.state.data}/>
    </div>
  );
}
}

export default App;

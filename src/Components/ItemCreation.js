import React, { Component } from 'react';

import '../App.css';
import axios from 'axios';

class ItemCreation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: ""
        };
    }

 handleClick = (e) => {
    e.preventDefault();

    let newItem = {
        username:e.target[0].value,
        content:e.target[1].value,
        email:"matt@gmail.com"
    }

    if (newItem.username === "" || newItem.content === ""){
        this.setState({error:"Ensure you have filled the fields out correctly"})
    }else{
        this.setState({error:""})
    }

    axios.post('http://localhost:5000/item/createItem',newItem).then(res => {

        this.props.passedFunction();
    })
}
render(){
  return (
    <div>
        <form onSubmit={this.handleClick}>
            <p>UserName</p>
        <input></input>
        <p>Content</p>
        <input></input>
        <p style={{color: 'red'}}>{this.state.error}</p>
        <button type="submit">Create Post</button>
        </form>
    </div>
  );
  }
}


export default ItemCreation;

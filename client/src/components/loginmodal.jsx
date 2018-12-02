import React, {Component} from 'react';
import {Button} from 'react-materialize';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Loginmodal extends Component{
  state= {
    email:"",
    password:""
  }
  handleChange= (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleLogin= (event)=> {
    event.preventDefault();
    console.log("handlelogin")
    axios.post('/api/users', this.state).then(response => {
      this.setState({
        email: "",
        password: ""
      })
      this.props.history.push('/artists')
    })  
  }
  render() {
    return (
      <div className="row">
      <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Enter E-mail" id="email" type="email" name="email" class="validate" onChange={this.handleChange}/>
          <label for="email">E-mail</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="Enter Password" id="password" type="password" name="password" class="validate" onChange={this.handleChange}/>
          <label for="password">Password</label>
        </div>
        </div>
        <Button waves='light'onClick={this.handleLogin}>Login</Button>
      </form>
    </div>
      );

  }
};

export default Loginmodal;

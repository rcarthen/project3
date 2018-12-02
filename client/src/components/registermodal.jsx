import React, { Component } from 'react';
import { Button } from 'react-materialize';
class Registermodal extends Component {
  state = {
    email: "",
    password: ""
  }
  render() {
    return (
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="First Name" id="email" type="email" class="validate" />
              <label for="email">First Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" id="password" type="password" class="validate" />
              <label for="password">Last Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="E-mail" id="email" type="email" class="validate" />
              <label for="email">E-mail</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Create Password" id="email" type="email" class="validate" />
              <label for="email">Password</label>
            </div>
            <Button waves='light' id="button" onClick={this.removeArtist}>REGISTER</Button>
          </div>
        </form>
      </div>
    );

  }
};


export default Registermodal;
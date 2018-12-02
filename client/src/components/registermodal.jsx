import React, {Component} from 'react';
class Registermodal extends Component{
  state= {
    email:"",
    password:""
  }
  render() {
    return (
      <div className="row">
      <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Enter E-mail" id="email" type="email" class="validate"/>
          <label for="email">E-mail</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="Enter Password" id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
        </div>
      </form>
    </div>
      );

  }
};


export default Loginmodal;
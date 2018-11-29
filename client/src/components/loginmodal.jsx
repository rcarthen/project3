import React, {Component} from 'react';
import {Modal, Button, Icon} from 'react-materialize';


class Loginmodal extends Component{
    render(){

    <Modal
    trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
      <div>
          <input id="email" placeholder="E-mail"/>
          <input id="password"  placeholder="Password"/>
</div>
  </Modal>;

    }
};




export default Loginmodal;
import React, {Component} from 'react';
import {Modal, Button, Icon} from 'react-materialize';


class Registermodal extends Component{
    render(){

    <Modal
    header='Add New Artist'
    trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
      <div>
          <input id="Artist Name" placeholder="Artist Name"/>
          <input id="Genre"  placeholder="Genre"/>
          <input id="title" placeholder="Location"/>
          <input id="title"  placeholder="Image"/>
          <input id="title" placeholder="Website"/>
         <input id="listeners" placeholder="Listeners"/>
</div>
  </Modal>;

    }
};

export default Registermodal;
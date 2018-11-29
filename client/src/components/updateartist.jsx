import React, { Component } from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import './style.css/updateartist.css';

class Updateartist extends Component {
  render() {
    return (
      <Modal id="artistList"
        header='Update Artist'
        open={this.props.open}>
        <div>
          <input id="artistList" placeholder="Artist Name" />
          <input id="artistList" placeholder="Image"/>
          <input id="artistList" placeholder="Genre" />
          <input id="artistList"placeholder="City, Country" />
          <input id="artistList" placeholder="Instagram Handle" />
          <input id="artistList" placeholder="Website" />
          <input id="artistList" placeholder="Listeners" />
        </div>
      </Modal>
    );
  }
};
export default Updateartist;
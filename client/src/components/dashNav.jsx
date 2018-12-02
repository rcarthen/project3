import React, {Component} from 'react';
import "./style.css/navbar.css";
import { Link } from 'react-router-dom';

class DashNav extends Component {
  render() {
    return (
      <nav>
      <div className="nav-wrapper white" id="navbar">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li><a className="black-text" href="/artists">My Artists</a></li>
          <li><a className="black-text"  href="/newArtist">New Artist</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}
export default DashNav;
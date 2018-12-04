import React, { Component } from 'react';
import "./style.css/dashNav.css";
import { Link } from 'react-router-dom';

//Dash Navbar- Users Dashboard

class DashNav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper white" id="hello">
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li><Link to={"/artists"} className="black-text">| THE TEAM | </Link></li>
            <li><Link to={"/newArtist"} className="black-text">| NEW ARTIST |</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default DashNav;


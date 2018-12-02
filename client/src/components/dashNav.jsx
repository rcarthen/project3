import React, {Component} from 'react';
import "./style.css/dashNav.css";
import { Link } from 'react-router-dom';

//Dash Navbar- Users Dashboard

class DashNav extends Component {
  render() {
    return (
      <nav>
      <div className="nav-wrapper white" id="hello">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li><a className="black-text" href="/artists">| THE TEAM |</a></li>
          <li><a className="black-text"  href="/newArtist">| NEW ARTIST |</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}
export default DashNav;
import React, {Component} from 'react';
import "./style.css/navbar.css";
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
      <div className="nav-wrapper" id="navbar">
        <a href="/" className="brand-logo">MERAKI</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/login">LOGIN</a></li>
          <li><a href="/register">REGISTER</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}
export default NavBar;
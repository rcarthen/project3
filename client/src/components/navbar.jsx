import React, {Component} from 'react';
import "./style.css/navbar.css";
import { BrowserRouter, Link } from 'react-router-dom';
import Dashboard from './dashboard';

class Navbar extends Component{
    render(){
        return (
        <div>

          <nav>
            <div className="nav-wrapper" id="navbar">
              <a href="/" className="brand-logo" id="meraki">MERAKI</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              
                <div className='nav-button'>
                  <Link to={'/artists'}> Login </Link> |
                  <Link to={'/'}> Register </Link>
                </div>
            </div>
          </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Home</a></li>
          <li><a href="badges.html">Our Purpose</a></li>
          <li><a href="collapsible.html">Login</a></li>
          <li><a href="mobile.html">Logout</a></li>
        </ul>
      </div>
        )
    }
}
export default Navbar;
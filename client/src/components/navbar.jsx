import React, {Component} from 'react';
import "./navbar.css";

class Navbar extends Component{
    render(){
        return <div>
        <nav>
        <div class="nav-wrapper" id="navbar">
          <a href="#!" className="brand-logo" id="meraki">MERAKI</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down" class="nav">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Our Purpose</a></li>
            <li><a href="collapsible.html">Login</a></li>
            <li><a href="mobile.html">Logout</a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul></div>;
    }
}
export default Navbar;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 import './style.css/homepage.css';
 import Updateartist from "./updateartist";





class Homepage extends Component{
  state = {
    register: false
  }

  toggleModal = () => {
    this.setState({ register: !this.state.register })
  }



    render(){
        return <div className="slogan">
        <h5 className="make">MAKE MUSIC MEANINGFUL
        </h5>
        <h5 id="name" className="make"> The music industry's most contemporary & effective artist management app.</h5>
        <img src=""/>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Our Purpose</a></li>
        <li><a href="collapsible.html">Login</a></li>
        <li><a href="mobile.html">Logout</a></li>
      </ul>
      <Updateartist
          open={this.state.register}
        />
        <img className="hpic"src="images/homepic.JPG"/>
        <button onClick={this.toggleModal}>Hello</button>
      </div>;
    

          
    }
}
export default Homepage;


import React, {Component} from 'react';
import "./footer.css";


class Footer extends Component{
    render(){
        return <div>
            <footer>
            <footer class="page-footer" id="footer">
            <div className= "container" className="col l4 offset-l2 s12">
                  <p className="white-text">MERAKI Copyright &copy; 2018 </p>
                  <p> may-rah-kee (v.)- to do something with soul, creativity, and love. </p>
                  <ul id="social">
                      <li id="icon"><i className="fab fa-instagram fa-2x ig"></i></li>
                      <li id="icon"><i className="fab fa-youtube-square fa-2x"></i></li>
                      <li id="icon"><i className="fab fa-twitter-square fa-2x"></i></li>
                      <li id="icon"><i className="fab fa-facebook fa-2x"></i></li>
                  </ul>
                  </div>
                  </footer>
                  </footer>
        </div>;
     
           
    }
}
export default Footer;
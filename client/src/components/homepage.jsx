import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css/homepage.css';
import { Slide, Slider} from 'react-materialize';



class Homepage extends Component {
  render() {
   
  return(
<div>
<Slider className="sliderfont">
  <Slide
    src= "images/homepic.JPG"
    title="MERAKI">
    MAKE | MUSIC | MEANINGFUL 
  </Slide>
  <Slide
    src="images/piano.JPG"
    placement="left">
    The music industry's most contemporary & effective app.
  </Slide>
  <Slide
    src="images/withlove.jpg"
    placement="right">
    With Soul, Love & Creativity
  </Slide>
</Slider>
{/* // // <h4 className="slogan">Make Music Meaningful</h4>
// // <h5 className="make">The music industry's most contemporary & effective app.</h5>
// // <div className="container">
// //   <img className="responsive-img hpic" src="images/homepic.JPG"/> 
// //   </div> */}
</div>

  )

  }
}
export default Homepage;


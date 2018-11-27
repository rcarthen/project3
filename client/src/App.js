import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Artistcard from './components/artistcard';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
            <Router>
              <div>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/artists" component={Artistcard}/>
      </div>
      </Router>
       <Footer/>
       </div>
    );
  }
}
///create Routes  ...create routes for each path




export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Artistcard from './components/artistcard';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Navbar />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/artists/:id" component={Artistcard} />
                <Route path="/artists" component={Dashboard} />
              </Switch>
        </div>
      </Router>
            <Footer/>
            </div>
    );
  }
}
///create Routes  ...create routes for each path

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Form from './components/form';
import ArtistList from './components/artistList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Artistcard from './components/artistcard';
import Loginmodal from './components/loginmodal';
import Registermodal from "./components/registermodal";

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
                <Route path="/artists" component={ArtistList} />
                <Route path="/newArtist" component={Form} />
                <Route path="/updateArtist/:artistId" component={Form} />
                <Route path= "/register" component={Registermodal}/>
                <Route path= "/login" component={Loginmodal}/>
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

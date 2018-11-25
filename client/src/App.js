import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Artistcard from './components/artistcard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
       <Dashboard/>
      </div>
    );
  }
}

export default App;

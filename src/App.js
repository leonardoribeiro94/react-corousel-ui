import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Carousel</h1>
        </header>
        <Carousel/>
      </div>
    );
  }
}

export default App;

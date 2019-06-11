import React, { Component } from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;

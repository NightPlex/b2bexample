import React, {Component} from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import ThumbsDown from "./components/MainContent/Modal/ThumbsDown";
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <MainContent stateObject={this.state}/>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import ThumbsDown from "./components/MainContent/Modal/ThumbsDown";
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import Login from "./components/Login/Login";

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = { loginOpen: true};
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({
            loginOpen: false
        })
    }

    render() {
        if (this.state.loginOpen) {
            return (
                <div className="App">
                    <Login handler={this.handler}/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Navigation/>
                    <MainContent/>
                </div>
            );
        }
    }
}

export default App;

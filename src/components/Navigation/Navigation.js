import React, { Component } from 'react';
import './../../scss/component-specific/Navigation.scss';
import "./../../scss/snippets.scss";
import "./../../scss/utilities.scss";

import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import IconBar from './IconBar/IconBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Navigation extends Component {
  render() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}><Logo/></Col>
                    {/* <Col xs={4}><Menu/></Col> */}
                    <Col className="c-v j-fl-end" xs={6}><IconBar/></Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Navigation;
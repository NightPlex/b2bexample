import React, { Component } from 'react';
import "./../../scss/component-specific/Footer.scss";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
  render() {
    return (
        <Container className="footer-wrapper">
            <Row className="u-pt-3">
                <Col xs={4}>
                    <a className="footer-logo">MetsäWood</a>
                </Col>
                <Col xs={4}>
                    <ul className="txt-l">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Site map</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={4}>
                    <ul className="txt-l">
                        <li>
                            <a>Privacy policy</a>
                        </li>
                        <li>
                            <a>Legal notice</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="u-pt-2 footer-copyright">
                <Col xs={12}>
                    <a>© Metsä Wood 2019</a>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import './../../scss/component-specific/Header.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {
  render() {
    return (
        <div className="u-mt-5">
            <Container className="txt-l u-ml-3 u-mr-7">
                <Row className="u-mb-2">
                    <Col xs={12}>
                        <div className="menu-links">
                            <a>Home -> </a>
                            <a className="menu-link-product"> Spruce Plywood</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="product-name">SPRUCE PLYWOOD</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Header;
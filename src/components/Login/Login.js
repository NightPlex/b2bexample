import React, {Component} from 'react';
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

import './../../scss/component-specific/Accordion.scss';

class Login extends Component {

    render() {
        return (
            <div className="u-mt-4 u-mb-10 login-page">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div onClick={this.props.handler} className="login-screen"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;

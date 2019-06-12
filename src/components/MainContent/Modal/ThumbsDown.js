import React, {Component} from 'react';

import './../../../scss/component-specific/Accordion.scss';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import Form from "react-bootstrap/es/Form";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

class ThumbsDown extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Row>
                        <Col md={3}>
                            <div>Feedback:</div>
                        </Col>
                        <Col md={9}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="5"/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <button type="button" className="btn btn-metsa modal-button" onClick={this.props.onHide}>Send feedback</button>
                    <button type="button" className="btn btn-metsa-grey modal-button" onClick={this.props.onHide}>Back</button>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ThumbsDown;
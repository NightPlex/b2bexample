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
                            <div>What went wrong?</div>
                        </Col>
                        <Col md={9}>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            className="checkbox-form"
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Wrong size'}
                                        />
                                        <Form.Check
                                            className="checkbox-form"
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Wrong color'}
                                        />
                                        <Form.Check
                                            className="checkbox-form"
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Missing label'}
                                        />
                                        <Form.Check
                                            className="checkbox-form"
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Ridiculously irrelevant'}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                    <button type="button" className="btn btn-metsa-grey modal-button" onClick={this.props.onHide}>Back</button>
                    <button type="button" className="btn btn-metsa modal-button" onClick={this.props.onHide}>Send feedback</button>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ThumbsDown;

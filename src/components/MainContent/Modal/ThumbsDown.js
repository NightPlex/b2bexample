import React, {Component} from 'react';

import './../../../scss/component-specific/Accordion.scss';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import Form from "react-bootstrap/es/Form";

class ThumbsDown extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Give feedback:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Send</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ThumbsDown;
import React, { Component } from 'react';
import Card from "react-bootstrap/es/Card";
import Button from "react-bootstrap/es/Button";
import Accordion from "react-bootstrap/es/Accordion";
import Form from "react-bootstrap/es/Form";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

class ConfirmOrder extends Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle as={Button} variant="control-accordion" eventKey="4">
                <Card.Header>
                    <div className="step">
                        <span>4</span>
                    </div>
                    <span className="header-text">Confirm order</span>
                </Card.Header>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="soldToCustomer">
                                <Form.Label column sm="3">
                                    Sold-To Customer
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control plaintext readOnly defaultValue="FRITZOE ENGROS AS" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="shipToCustomer">
                                <Form.Label column sm="3">
                                    Ship-To Address
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control plaintext readOnly defaultValue="FRITZOE ENGROS AS, LARVIK" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="Terms of Delivery">
                                <Form.Label column sm="3">
                                    CIF LARVIK
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="estimatedDeliveryTime">
                                <Form.Label column sm="3">
                                    Estimated delivery time
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control plaintext readOnly defaultValue="Week 42, 17 - 23/10/2019" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Add your order reference:
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="text" placeholder="37556" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="additionalInformation">
                                <Form.Label column sm="3">
                                    Additional information:
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control as="textarea" rows="3" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="additionalInformation">
                                <Form.Check aria-label="option 1" />
                                <Form.Label column sm="3">
                                    Additional information:
                                </Form.Label>
                            </Form.Group>
                        </Form>
                        <button type="button" className="btn btn-metsa-grey confirm">CONFIRM ORDER</button>
                        <button type="button" className="btn btn-metsa confirm">RESET</button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default ConfirmOrder;
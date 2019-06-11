import React, { Component } from 'react';
import Card from "react-bootstrap/es/Card";
import Button from "react-bootstrap/es/Button";
import Accordion from "react-bootstrap/es/Accordion";

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
                    <Card.Body>Delivery information</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default ConfirmOrder;
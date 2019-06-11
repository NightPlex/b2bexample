import React, { Component } from 'react';
import Card from "react-bootstrap/es/Card";
import Accordion from "react-bootstrap/es/Accordion";
import Button from "react-bootstrap/es/Button";

class ShoppingCart extends Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle as={Button} variant="control-accordion" eventKey="3">
                    <Card.Header>
                        <div className="step">
                            <span>3</span>
                        </div>
                        <span className="header-text">Shopping cart</span>
                    </Card.Header>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                    <Card.Body>cart</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default ShoppingCart;
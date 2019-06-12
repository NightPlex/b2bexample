import React, {Component} from 'react';
import Card from "react-bootstrap/es/Card";
import Accordion from "react-bootstrap/es/Accordion";
import Button from "react-bootstrap/es/Button";
import ListGroup from "react-bootstrap/es/ListGroup";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Form from "react-bootstrap/es/Form";

class ShoppingCart extends Component {
    render() {
        return (
            <Card className="cart-accordion">
                <Accordion.Toggle as={Button} variant="control-accordion" eventKey="3">
                    <Card.Header>
                        <div className="step">
                            <span>3</span>
                        </div>
                        <span className="header-text">Shopping cart</span>
                    </Card.Header>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>Product</div>
                                    </Col>
                                    <Col md={3}>
                                        <div>Customer reference</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>Quantity (pcs)</div>
                                    </Col>
                                    <Col md={1}>
                                        <div>m2</div>
                                    </Col>
                                    <Col md={1}>
                                        <div>Unit Price</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>Price</div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                        <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count:
                                            5
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="order-item-level-secondary">
                                            <Form.Control type="text" placeholder="37556"/>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">
                                            <div className="order-item-level-secondary">
                                                <Form>
                                                    <Form.Group
                                                        controlId="exampleForm.ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option>20</option>
                                                            <option>30</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">408 €</div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">405 €</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">5600,60 €</div>
                                        <i aria-hidden="true" className="remove big icon link"></i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                        <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count:
                                            5
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="order-item-level-secondary">
                                            <Form.Control type="text" placeholder="37556"/>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">
                                            <div className="order-item-level-secondary">
                                                <Form>
                                                    <Form.Group
                                                        controlId="exampleForm.ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option>20</option>
                                                            <option>30</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">408 €</div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">405 €</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">5600,60 €</div>
                                        <i aria-hidden="true" className="remove big icon link"></i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                        <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count:
                                            5
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="order-item-level-secondary">
                                            <Form.Control type="text" placeholder="37556"/>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">
                                            <div className="order-item-level-secondary">
                                                <Form>
                                                    <Form.Group
                                                        controlId="exampleForm.ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option>20</option>
                                                            <option>30</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">408 €</div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">405 €</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">5600,60 €</div>
                                        <i aria-hidden="true" className="remove big icon link"></i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                        <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count:
                                            5
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="order-item-level-secondary">
                                            <Form.Control type="text" placeholder="37556"/>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">
                                            <div className="order-item-level-secondary">
                                                <Form>
                                                    <Form.Group
                                                        controlId="exampleForm.ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option>20</option>
                                                            <option>30</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">408 €</div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">405 €</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">5600,60 €</div>
                                        <i aria-hidden="true" className="remove big icon link"></i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                        <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count:
                                            5
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="order-item-level-secondary">
                                            <Form.Control type="text" placeholder="37556"/>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">
                                            <div className="order-item-level-secondary">
                                                <Form>
                                                    <Form.Group
                                                        controlId="exampleForm.ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option>20</option>
                                                            <option>30</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">408 €</div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">405 €</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">5600,60 €</div>
                                        <i aria-hidden="true" className="remove big icon link"></i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                        <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count:
                                            5
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="order-item-level-secondary">
                                            <Form.Control type="text" placeholder="37556"/>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">
                                            <div className="order-item-level-secondary">
                                                <Form>
                                                    <Form.Group
                                                        controlId="exampleForm.ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option>20</option>
                                                            <option>30</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">408 €</div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="order-item-level-secondary">405 €</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="order-item-level-secondary">5600,60 €</div>
                                        <i aria-hidden="true" className="remove big icon link"></i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default ShoppingCart;
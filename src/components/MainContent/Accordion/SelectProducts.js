import React, {Component} from 'react';
import Card from "react-bootstrap/es/Card";
import Button from "react-bootstrap/es/Button";
import Accordion from "react-bootstrap/es/Accordion";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import ListGroup from "react-bootstrap/es/ListGroup";
import Form from "react-bootstrap/es/Form";

class SelectProducts extends Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle as={Button} variant="control-accordion" eventKey="1">
                    <Card.Header>
                        <div className="step">
                            <span>2</span>
                        </div>
                        <span className="header-text">Select Products</span>
                    </Card.Header>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="ownProducts" title="Own products">
                                rwarasdasd
                            </Tab>
                            <Tab eventKey="allProducts" title="All products">
                                rwarasdas
                            </Tab>
                            <Tab eventKey="pastOrders" title="Past orders">
                                <Accordion defaultActiveKey="1" className="order-accordion">
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Metsa order no:</div>
                                                        <div className="order-header-second">313806666</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">06/11/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Availability</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Price m3</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">NO STOCK</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                                <button type="button" className="btn btn-metsa">Recommend</button>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">127.9</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">127.9</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">127.9</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Tab>
                            <Tab eventKey="recommendedOrders" title="Recommended orders" className="recommended-orders">
                                <Accordion defaultActiveKey="1" className="order-accordion">
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Metsa order no:</div>
                                                        <div className="order-header-second">313806666</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">06/11/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Availability</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Price m3</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">NO STOCK</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                                <button type="button" className="btn btn-metsa">Recommend</button>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">127.9</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">127.9</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div>WeatherGuard Spruce Plywood 12 x 2400 x 1200</div>
                                                                <div className="order-item-level-secondary">Quality: III / III TG2 Ply Count: 5</div>
                                                            </Col>
                                                            <Col md={3}>
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
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">127.9</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary">408 €</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default SelectProducts;
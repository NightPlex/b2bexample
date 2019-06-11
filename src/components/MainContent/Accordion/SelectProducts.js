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
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    2. Select Products
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="ownProducts" title="Own products">
                                rwar
                            </Tab>
                            <Tab eventKey="allProducts" title="All products">
                                rwar
                            </Tab>
                            <Tab eventKey="pastOrders" title="Past orders">
                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <Row>
                                                    <Col xs={4}>
                                                        <div>Customer reference: </div>
                                                        <div>31380</div>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <div>Metsa order no: </div>
                                                        <div>313806666</div>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <div>Order date: </div>
                                                        <div>06/11/2019</div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <div>
                                                            <Form>
                                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <Form.Control as="select">
                                                                        <option>20</option>
                                                                        <option>30</option>
                                                                    </Form.Control>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <Row>
                                                    <Col xs={6}>
                                                        <div>Customer reference: </div>
                                                        <div>31380</div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div>Metsa order no: </div>
                                                        <div>313806666</div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <Row>
                                                    <Col xs={6}>
                                                        <div>Customer reference: </div>
                                                        <div>31380</div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div>Metsa order no: </div>
                                                        <div>313806666</div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <Row>
                                                    <Col xs={6}>
                                                        <div>Customer reference: </div>
                                                        <div>31380</div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div>Metsa order no: </div>
                                                        <div>313806666</div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <Row>
                                                    <Col xs={6}>
                                                        <div>Customer reference: </div>
                                                        <div>31380</div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div>Metsa order no: </div>
                                                        <div>313806666</div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Tab>
                            <Tab eventKey="recommendedOrders" title="Recommended orders" disabled>
                                wrar
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default SelectProducts;
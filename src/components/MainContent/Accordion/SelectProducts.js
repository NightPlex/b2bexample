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
import ThumbsDown from "../Modal/ThumbsDown";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class SelectProducts extends Component {

    constructor(...args) {
        super(...args);
        this.state = {modalShow: false};
    }

    changeRecommendToGreen(e) {
        e.target.classList.add("green");
        document.getElementById("thumbs-down").classList.remove("red");
    }

    render() {
        function handleRecommend(e) {
            document.getElementById("spinner").style.display = "block";
            window.setTimeout(function() {
                document.getElementById("spinner").style.display = "none";
                document.getElementById("uncontrolled-tab-example-tab-recommendedOrders").style.display = "block";
                document.getElementById("uncontrolled-tab-example-tab-recommendedOrders").click();
            }, 2000);
        }

        function addedToCart() {
            NotificationManager.success('Smart order added to cart');
        }

        let handleOpen = (e) => {
            this.setState({modalShow: true});
            e.target.classList.add("red");
            document.getElementById("thumbs-up").classList.remove("green");
        };

        let modalClose = () => this.setState({modalShow: false});

        return (
            <Card>
                <Accordion.Toggle as={Button} variant="control-accordion" eventKey="1" id="select-change">
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
                                <div className="own-products"></div>
                            </Tab>
                            <Tab eventKey="allProducts" title="All products">
                                <div className="all-products"></div>
                            </Tab>
                            <Tab eventKey="pastOrders" title="Past orders">
                                <Accordion className="order-accordion">
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
                                                        <div className="order-header-second">1030113102</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">06/04/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Availability (m<sup>3</sup>)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Unit price</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 931</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">345</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">42,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">14,56 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1500</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Black (EXT) Ply count:12
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select" disabled>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary bold-stock">OUT OF STOCK
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">33,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">11,45 GBP/m<sup>2</sup></div>
                                                                <button type="button" className="btn btn-metsa block-button generate-button"
                                                                        onClick={handleRecommend}>GENERATE SMART ORDERS
                                                                </button>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1432</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">150</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">29,19 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">9,81 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31379</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Metsa order no:</div>
                                                        <div className="order-header-second">1030278912</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">02/02/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31378</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Metsa order no:</div>
                                                        <div className="order-header-second">1030276289</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">20/01/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31377</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Metsa order no:</div>
                                                        <div className="order-header-second">1030275791</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">14/12/2018</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Tab>
                            <Tab eventKey="recommendedOrders" title="Smart orders" className="recommended-orders">
                                <Accordion className="order-accordion">
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Smart order no:</div>
                                                        <div className="order-header-second">1030113102-R1</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">14/06/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="recommend-order">
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Availability (m<sup>3</sup>)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Unit price</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 931</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>60 (1 pack))</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">345</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">42,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">14,56 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="bestseller-r">
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1500</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Black (EXT) Ply count:12
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>180 (3 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">435
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">33,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">11,45 GBP/m<sup>2</sup></div>
                                                                <div className="feedback-container">
                                                                    <i id="thumbs-up" aria-hidden="true"
                                                                       className="thumbs up large icon link"
                                                                       onClick={this.changeRecommendToGreen}></i>
                                                                    <i id="thumbs-down" aria-hidden="true"
                                                                       className="thumbs down large icon link"
                                                                       onClick={handleOpen}></i>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1432</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">150</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">29,19 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">9,81 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="add-to-cart-list">
                                                        <button onClick={addedToCart} type="button" className="btn btn-metsa confirm">ADD TO CART</button>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Smart order no:</div>
                                                        <div className="order-header-second">1030113102-R2</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">14/06/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="recommend-order">
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Availability (m<sup>3</sup>)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Unit price</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 931</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">345</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">42,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">14,56 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="bestseller-r">
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 30 x 2294 x 1500</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Black (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">378
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">33,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">11,45 GBP/m<sup>2</sup></div>
                                                                <div className="feedback-container">
                                                                    <i id="thumbs-up" aria-hidden="true"
                                                                       className="thumbs up large icon link"
                                                                       onClick={this.changeRecommendToGreen}></i>
                                                                    <i id="thumbs-down" aria-hidden="true"
                                                                       className="thumbs down large icon link"
                                                                       onClick={handleOpen}></i>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1432</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">150</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">29,19 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">9,81 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="add-to-cart-list">
                                                        <button onClick={addedToCart} type="button" className="btn btn-metsa confirm">ADD TO CART</button>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Smart order no:</div>
                                                        <div className="order-header-second">1030113102-R3</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">14/06/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className="recommend-order">
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Availability (m<sup>3</sup>)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Unit price</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 931</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">345</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">42,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">14,56 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="bestseller">
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2206 x 793</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Black (EXT) Ply count:12
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">634
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">33,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">11,45 GBP/m<sup>2</sup></div>
                                                                <div className="feedback-container">
                                                                    <i id="thumbs-up" aria-hidden="true"
                                                                       className="thumbs up large icon link"
                                                                       onClick={this.changeRecommendToGreen}></i>
                                                                    <i id="thumbs-down" aria-hidden="true"
                                                                       className="thumbs down large icon link"
                                                                       onClick={handleOpen}></i>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1432</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">150</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">29,19 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">9,81 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="add-to-cart-list">
                                                        <button onClick={addedToCart} type="button" className="btn btn-metsa confirm">ADD TO CART</button>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Smart order no:</div>
                                                        <div className="order-header-second">1030113102-R4</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">14/06/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className="recommend-order">
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Availability (m<sup>3</sup>)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Unit price</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 931</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">345</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">42,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">14,56 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="bestseller">
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 30 x 2266 x 820</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Black (EXT) Ply count:12
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">439
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">33,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">11,45 GBP/m<sup>2</sup></div>
                                                                <div className="feedback-container">
                                                                    <i id="thumbs-up" aria-hidden="true"
                                                                       className="thumbs up large icon link"
                                                                       onClick={this.changeRecommendToGreen}></i>
                                                                    <i id="thumbs-down" aria-hidden="true"
                                                                       className="thumbs down large icon link"
                                                                       onClick={handleOpen}></i>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1432</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">150</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">29,19 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">9,81 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="add-to-cart-list">
                                                        <button onClick={addedToCart} type="button" className="btn btn-metsa confirm">ADD TO CART</button>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                            <Card.Header>
                                                <Row>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Customer reference:</div>
                                                        <div className="order-header-second">31380</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Smart order no:</div>
                                                        <div className="order-header-second">1030113102-R5</div>
                                                    </Col>
                                                    <Col sm={4} className="order-header-row">
                                                        <div>Order date:</div>
                                                        <div className="order-header-second">14/06/2019</div>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className="recommend-order">
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Product</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Quantity (pcs)</div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div>Availability (m<sup>3</sup>)</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div>Unit price</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 931</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">345</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">42,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">14,56 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="bestseller">
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 24 x 2000 x 3000</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Black (EXT) Ply count:12
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>240 (4 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>120 (2 packs)</option>
                                                                                <option>180 (3 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">230
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">33,12 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">11,45 GBP/m<sup>2</sup></div>
                                                                <div className="feedback-container">
                                                                    <i id="thumbs-up" aria-hidden="true"
                                                                       className="thumbs up large icon link"
                                                                       onClick={this.changeRecommendToGreen}></i>
                                                                    <i id="thumbs-down" aria-hidden="true"
                                                                       className="thumbs down large icon link"
                                                                       onClick={handleOpen}></i>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col md={5}>
                                                                <div>Hardwood Deck Plywood 21 x 2480 x 1432</div>
                                                                <div className="order-item-level-secondary">Dark Brown
                                                                    120 Wire Mesh-METSÄWOOD-PRINTED
                                                                </div>
                                                                <div className="order-item-level-secondary">Smooth Edges Sealed
                                                                    Brown (EXT) Ply count:11
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">
                                                                    <Form>
                                                                        <Form.Group
                                                                            controlId="exampleForm.ControlSelect1">
                                                                            <Form.Control as="select">
                                                                                <option>120 (2 packs)</option>
                                                                                <option>60 (1 pack)</option>
                                                                                <option>180 (3 packs)</option>
                                                                                <option>240 (4 packs)</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>
                                                                <div className="order-item-level-secondary">150</div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="order-item-level-secondary block">29,19 GBP/PC</div>
                                                                <div className="order-item-level-secondary block">9,81 GBP/m<sup>2</sup></div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="add-to-cart-list">
                                                        <button onClick={addedToCart} type="button" className="btn btn-metsa confirm">ADD TO CART</button>
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
                <ThumbsDown
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
                <NotificationContainer/>
            </Card>
        );
    }
}

export default SelectProducts;

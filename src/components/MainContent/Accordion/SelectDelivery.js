import React, {Component} from 'react';
import Card from "react-bootstrap/es/Card";
import Button from "react-bootstrap/es/Button";
import Accordion from "react-bootstrap/es/Accordion";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Form from "react-bootstrap/es/Form";
import Table from "react-bootstrap/es/Table";

class SelectDelivery extends Component {
    render() {
        
        function openProducts() {
            document.getElementById("select-change").click();
        }
        
        return (
            <Card>
                <Accordion.Toggle as={Button} variant="control-accordion" eventKey="0">
                    <Card.Header>
                        <div className="step">
                            <span>1</span>
                        </div>
                        <span className="header-text">Select Delivery Destination and Time</span>
                    </Card.Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col md={5}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Row>
                                            <Col md={4}>

                                                <Form.Label>Sold-to Customer
                                                </Form.Label>
                                            </Col>
                                            <Col md={8}>

                                                <Form.Control as="select">
                                                    <option>DYNAMICBRIDGE LTD</option>
                                                    <option>WOODNATION</option>
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                    <Form.Group controlId="exampleForm.ControlSelect2">
                                        <Row>
                                            <Col md={4}>
                                                <Form.Label>Ship-to Customer</Form.Label>
                                            </Col>
                                            <Col md={8}>
                                                <Form.Control as="select">
                                                    <option>DYNAMICBRIDGE LTD, LARVIK</option>
                                                    <option>WOODNATION, HUDDERSFIELD</option>
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Button variant="metsa">Search</Button>
                                </Col>
                            </Row>

                                    <div className="calendar-controls">
                                        <Button variant="grey">&#60;</Button>
                                        <div className="float-right">
                                        <Button variant="grey">&#62;</Button>
                                        </div>
                                    </div>

                            <div className="delivery-selection">
                                <Table bordered hover delivery-table="true">
                                    <thead>
                                    <tr>
                                        <th className="product-header">Product:</th>
                                        <th>
                                            <p>Oct 03 - 07/10</p>
                                            <Button variant="metsa unactive">W40</Button>
                                        </th>
                                        <th>
                                            <p>Oct 10 - 14/10</p>
                                            <Button variant="metsa unactive">W41</Button>
                                        </th>
                                        <th className="active">
                                            <p>Oct 17 - 21/10</p>
                                            <Button variant="metsa" onClick={openProducts}>W42</Button>
                                        </th>
                                        <th>
                                            <p>Oct 24 - 28/10</p>
                                            <Button variant="metsa unactive">W43</Button>
                                        </th>
                                        <th>
                                            <p>Nov 31 - 04/11</p>
                                            <Button variant="metsa unactive">W44</Button>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Spruce Plywood (basic products and total)</td>
                                        <td>50 m<sup>3</sup></td>
                                        <td>150 m<sup>3</sup></td>
                                        <td className="active">200 m<sup>3</sup></td>
                                        <td>170 m<sup>3</sup></td>
                                        <td>100 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>WeatherGuard / MouldGuard</td>
                                        <td>40 m<sup>3</sup></td>
                                        <td>20 m<sup>3</sup></td>
                                        <td className="active">70 m<sup>3</sup></td>
                                        <td>100 m<sup>3</sup></td>
                                        <td>300 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>Fire Resistant</td>
                                        <td>75 m<sup>3</sup></td>
                                        <td>40 m<sup>3</sup></td>
                                        <td className="active">60 m<sup>3</sup></td>
                                        <td>170 m<sup>3</sup></td>
                                        <td>200 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>Phoenix</td>
                                        <td>50 m<sup>3</sup></td>
                                        <td>150 m<sup>3</sup></td>
                                        <td className="active">260 m<sup>3</sup></td>
                                        <td>230 m<sup>3</sup></td>
                                        <td>170 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>Spruce Flex</td>
                                        <td>30 m<sup>3</sup></td>
                                        <td>20 m<sup>3</sup></td>
                                        <td className="active">60 m<sup>3</sup></td>
                                        <td>200 m<sup>3</sup></td>
                                        <td>100 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>EcoForm</td>
                                        <td>40 m<sup>3</sup></td>
                                        <td>70 m<sup>3</sup></td>
                                        <td className="active">40 m<sup>3</sup></td>
                                        <td>90 m<sup>3</sup></td>
                                        <td>90 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>9/12 mm Thickness</td>
                                        <td>150 m<sup>3</sup></td>
                                        <td>150 m<sup>3</sup></td>
                                        <td className="active">190 m<sup>3</sup></td>
                                        <td>200 m<sup>3</sup></td>
                                        <td>300 m<sup>3</sup></td>
                                    </tr>
                                    <tr>
                                        <td>Machined Products (EL/HL/TG2/TG4)</td>
                                        <td>40 m<sup>3</sup></td>
                                        <td>60 m<sup>3</sup></td>
                                        <td className="active">80 m<sup>3</sup></td>
                                        <td>100 m<sup>3</sup></td>
                                        <td>120 m<sup>3</sup></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default SelectDelivery;

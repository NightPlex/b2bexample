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
                                                    <option>FRITZOE ENGROS AS</option>
                                                    <option>PAPERPLAN ENGROS AS</option>
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
                                                    <option>FRITZOE ENGROS AS</option>
                                                    <option>PAPERPLAN ENGROS AS</option>
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Button variant="metsa">Search</Button>
                                </Col>
                            </Row>

                                    <div class="calendar-controls">
                                        <Button variant="grey">&#60;</Button>
                                        <div class="float-right">
                                        <Button variant="grey">&#62;</Button>
                                        </div>
                                    </div>

                            <div class="delivery-selection">
                                <Table bordered hover delivery-table>
                                    <thead>
                                    <tr>
                                        <th class="product-header">Product:</th>
                                        <th>
                                            <p>Oct 03 - 07/10</p>
                                            <Button variant="metsa unactive">W42</Button>
                                        </th>
                                        <th>
                                            <p>Oct 03 - 07/10</p>
                                            <Button variant="metsa unactive">W42</Button>
                                        </th>
                                        <th class="active">
                                            <p>Oct 03 - 07/10</p>
                                            <Button variant="metsa">W42</Button>
                                        </th>
                                        <th>
                                            <p>Oct 03 - 07/10</p>
                                            <Button variant="metsa unactive">W42</Button>
                                        </th>
                                        <th>
                                            <p>Oct 03 - 07/10</p>
                                            <Button variant="metsa unactive">W42</Button>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Spruce Plywood (basic products and total)</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>WeatherGuard / MouldGuard</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Resistant</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Phoenix</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Spruce Flex</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>EcoForm</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>9/12 mm Thickness</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Machined Products (EL/HL/TG2/TG4)</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td class="active">@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
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
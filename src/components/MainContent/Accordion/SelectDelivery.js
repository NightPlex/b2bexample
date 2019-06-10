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
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Select Delivery Destination and Time
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Row>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Sold-to Customer</Form.Label>
                                    <Form.Control as="select">
                                        <option>FRITZOE ENGROS AS</option>
                                        <option>PAPERPLAN ENGROS AS</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Ship-to Customer</Form.Label>
                                    <Form.Control as="select">
                                        <option>FRITZOE ENGROS AS</option>
                                        <option>PAPERPLAN ENGROS AS</option>
                                    </Form.Control>
                                </Form.Group>
                                {/*<Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Product:</th>
                                        <th>
                                            <Col xs={12}>
                                                <p>Oct 03 - 07/10</p>
                                            </Col>
                                            <Col xs={12}>
                                                <Button variant="success">w42</Button>
                                            </Col>
                                        </th>
                                        <th>
                                            <Col xs={12}>
                                                <p>Oct 03 - 07/10</p>
                                            </Col>
                                            <Col xs={12}>
                                                <Button variant="success">w42</Button>
                                            </Col>
                                        </th>
                                        <th>
                                            <Col xs={12}>
                                                <p>Oct 03 - 07/10</p>
                                            </Col>
                                            <Col xs={12}>
                                                <Button variant="success">w42</Button>
                                            </Col>
                                        </th>
                                        <th>
                                            <Col xs={12}>
                                                <p>Oct 03 - 07/10</p>
                                            </Col>
                                            <Col xs={12}>
                                                <Button variant="success">w42</Button>
                                            </Col>
                                        </th>
                                        <th>
                                            <Col xs={12}>
                                                <p>Oct 03 - 07/10</p>
                                            </Col>
                                            <Col xs={12}>
                                                <Button variant="success">w42</Button>
                                            </Col>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Spruce Plywood (basic products and total)</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>WeatherGuard / MouldGuard</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Resistant</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Phoenix</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Spruce Flex</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>EcoForm</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>9/12 mm Thickness</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    <tr>
                                        <td>Machined Products (EL/HL/TG2/TG4)</td>
                                        <td>100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                        <td>100 m3</td>
                                        <td>@100 m3</td>
                                    </tr>
                                    </tbody>
                                </Table>*/}
                                <Button variant="success">Search</Button>
                            </Form>
                        </Card.Body>
                    </Row>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default SelectDelivery;
import React, {Component} from 'react';
import Accordion from "react-bootstrap/es/Accordion";
import ConfirmOrder from "./Accordion/ConfirmOrder";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import SelectDelivery from "./Accordion/SelectDelivery";
import SelectProducts from "./Accordion/SelectProducts";
import './../../scss/component-specific/Accordion.scss';

class MainContent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Accordion defaultActiveKey="1">
                                <SelectDelivery/>
                                <SelectProducts/>
                                <ConfirmOrder/>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainContent;
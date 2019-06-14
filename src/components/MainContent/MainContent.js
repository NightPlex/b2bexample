import React, {Component} from 'react';
import Accordion from "react-bootstrap/es/Accordion";
import ConfirmOrder from "./Accordion/ConfirmOrder";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import SelectDelivery from "./Accordion/SelectDelivery";
import SelectProducts from "./Accordion/SelectProducts";
import ShoppingCart from "./Accordion/ShoppingCart";

import './../../scss/component-specific/Accordion.scss';

class MainContent extends Component {

    render() {
        return (
            <div className="u-mt-4 u-mb-10">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Accordion className="accordion-wrapper">
                                <SelectDelivery/>
                                <SelectProducts/>
                                <ShoppingCart/>
                                <ConfirmOrder/>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
                <div id="spinner" className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}

export default MainContent;

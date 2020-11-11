import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import SolarBotLogo from "../solarbotlogo";
import SolarBotIcon from "../solarboticon";


interface FooterProps {

}


const Footer: React.FC<FooterProps> = ({}) => {


    return (
        <>
            <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="light" variant="light" className="border-top border-dark">
                <Container fluid>
                    <Row className="w-100">
                        <Col xs={12} md={6} lg={4} className="text-center my-auto">
                            <h6>
                                SolarBot FFXIV Discord Bot
                            </h6>
                        </Col>
                        <Col xs={12} md={6} lg={4} className="text-center">
                            <SolarBotIcon height={50}/>
                        </Col>
                        <Col xs={12} md={6} lg={4} className="text-center my-auto">
                            <h6>
                                Made by Cory Ball
                            </h6>
                        </Col>
                    </Row>
                </Container>

            </Navbar>
        </>
    )
}

export default Footer;
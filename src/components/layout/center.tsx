import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HomePage from "../homePage";


interface CenterProps {
    children
}


const Center: React.FC<CenterProps> = ({children}) => {


    return (
        <Row className="h-100 align-items-center">
            <Col className="h-50 justify-content-center">
                <Container className="h-100">
                    {children}
                </Container>
            </Col>
        </Row>
    )
}

export default Center;
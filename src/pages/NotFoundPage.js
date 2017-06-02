/**
 * Created by DIMOS on 22.04.2017.
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Danger } from '../components/alerts';

const NotFoundPage = (props) => (
    <Row>
        <Col mdOffset={4} md={4}>
            <Danger error="Sorry, the page you are requested not found."/>
        </Col>
    </Row>
);

export default NotFoundPage;
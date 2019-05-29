import React from 'react';
import PolicyTitle from './policytitle';
import PolicyDescription from './policydescription';

import { Row, Col } from 'react-bootstrap';

const PolicyHeader = (props) => (
    <Row noGutters>
        <Col xs="auto" className="d-none d-sm-inline" style={{height: 48}}>
            <span className="chevron right" style={{top: 0, display: (props.clicked)? "none": ""}} ></span>
            <span className="chevron bottom" style={{top: 0, backgroundColor: '#ffae42', display: (!props.clicked)? "none": ""}} ></span>
        </Col>
        <Col xs>
            <PolicyTitle {...props} />
            <PolicyDescription {...props} />
        </Col>
        <Col xs="auto" className="d-none d-sm-block d-lg-none" style={{height: 64}}>
            <img src={props.partner.logo} alt={props.partner.id} style={{height: '100%'}} />
        </Col>
    </Row>
);

export default PolicyHeader;

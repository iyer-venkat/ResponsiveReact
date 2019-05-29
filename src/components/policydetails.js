import React from 'react';
import CoverageDate from './coveragedate';
import PolicyDate from './policydate';
import PolicyAmount from './policyamount';
import PolicyRenewal from './policyrenewal';

import { Row, Col } from 'react-bootstrap';

const PolicyDetails = (props) => {
    if(props.allowClick)
        return (
            <Row>
                <Col xs="auto" className="d-none d-sm-inline" style={styles.borderRight}><PolicyDate {...props} /></Col>
                <Col xs={8} sm="auto"><CoverageDate {...props} /></Col>
                <Col xs="auto" className="d-none d-sm-inline" style={styles.borderLeft}><PolicyAmount {...props} /></Col>
                <Col xs={4} sm="auto" className="d-inline d-sm-none" style={styles.height48}>
                    <img src={props.partner.logo} alt={props.partner.id} style={styles.height_100_float_right} />
                </Col>
                {(props.renewal)?
                <Col xs="auto" className="d-none d-sm-inline" style={styles.borderLeft}><PolicyRenewal {...props} /></Col>
                : null}                
            </Row>
        );
    
    return (
        <Row>
            <Col xs={8} sm="auto"><CoverageDate {...props} /></Col>
            <Col xs={4} sm="auto" className="d-inline d-sm-none" style={styles.height48}>
                <img src={props.partner.logo} alt={props.partner.id} style={styles.height_100_float_right} />
            </Col>
        </Row>
    );
}

let styles = {
    borderRight: {
        borderRight: '1px solid gray'
    },
    borderLeft: {
        borderLeft: '1px solid gray'
    },
    height48: {
        height: 48
    },
    height_100_float_right: {
        height: '100%',
        float: 'right'
    }
};

export default PolicyDetails;

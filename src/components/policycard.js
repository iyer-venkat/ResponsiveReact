import React from 'react';
import PolicyHeader from './policyheader';
import PolicyDetails from './policydetails';

import {Container, Row, Col} from 'react-bootstrap';

class PolicyCard extends React.Component{
    constructor(props){
        super(props);

        this.cardClicked = this.cardClicked.bind(this);
        this.state = {clicked: false};
    }

    cardClicked(e){
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        let shadowClass = (this.state.clicked)? {boxShadow: '0px 15px 25px lightgrey'}: {};
        return (
            <Container fluid="true" onClick={(this.props.allowClick)? this.cardClicked: null} 
                style={{...{backgroundColor: '#FFF', padding: 12}, ...shadowClass}}>
                <Row>
                <Col>
                    <Row>
                        <Col><PolicyHeader {...this.props} clicked={this.state.clicked} /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><PolicyDetails {...this.props} /></Col>
                    </Row>
                </Col>
                <Col xs="auto" className="d-none d-lg-inline" style={{alignSelf: 'center'}}>
                    <img src={this.props.partner.logo} alt={this.props.partner.id} />
                </Col>
                </Row>
            </Container>
        );
    }
} 

export default PolicyCard;

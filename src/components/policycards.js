import "es6-promise/auto";
import 'isomorphic-fetch';

import React, { Fragment } from 'react';
import PolicyCardContainer from './policycardcontainer';

export class PolicyCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {policies: [], isLoading: true};
    }

    componentWillMount(){
        fetch("https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking")
        .then(response => response.json())
        .then(data =>
          this.setState({
            policies: data.policies,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render(){
        let ctr = 0;
        return (
            <>
            {
                (this.state.isLoading)?
                <div style={{backgroundColor: 'lightgray', opacity: 0.4, width: '100%', height: '100%'}}>Loading your policies...</div>
                : this.state.policies.map(policy => <Fragment key={ctr++}><PolicyCardContainer {...policy} key={ctr++} /> <br /></Fragment>)
            }
            </>
        );
    }
}
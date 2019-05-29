import React from 'react';

const PolicyRenewal = (props) => (
    (props.renewal)?
    <>
    <div className="tk-brandon-grotesque">{props.renewal.toUpperCase()}</div>
    <div className="tk-bitter" style={styles.sub}>Renewal</div>
    </>
    : null
);


let styles = {
    sub: {
        color: 'gray', 
        fontSize: 12
    },
};

export default PolicyRenewal;

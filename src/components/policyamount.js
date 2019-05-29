import React from 'react';

const PolicyAmount = (props) => (
    <>
    <div className="tk-brandon-grotesque">AU ${props.premium}</div>
    <div className="tk-bitter" style={styles.sub}>Price/premium</div>
    </>
);

let styles = {
    sub: {
        color: 'gray', 
        fontSize: 12
    },
};

export default PolicyAmount;

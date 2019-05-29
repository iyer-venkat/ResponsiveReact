import React from 'react';

const PolicyDescription = (props) => (
  <div className="tk-bitter" style={{color: 'gray', fontSize: (!props.allowClick)? '95%': ''}}>{props.id} | {props.description}</div>
);

export default PolicyDescription;

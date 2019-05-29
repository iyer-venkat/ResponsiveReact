import React from 'react';
import moment from 'moment';

const PolicyDate = (props) => (
    <>
    <div className="tk-brandon-grotesque">{moment(props.payment_date.split('T')[0]).format("DD-MMM-YYYY").toUpperCase()}</div>
    <div className="tk-bitter" style={{color: 'gray', fontSize: 12}}>Payment date</div>
    </>
);

export default PolicyDate;

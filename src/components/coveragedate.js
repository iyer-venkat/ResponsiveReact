import React from 'react';
import moment from 'moment';

const CoverageDate = (props) => {
    return (
        <>
        <div className="tk-brandon-grotesque" style={{fontSize: (!props.allowClick)? '94%': ''}}>
            {moment(props.coverage_start_date).format("DD-MMM-YYYY").toUpperCase()} 
            {(props.coverage_end_date)?
                " to "+ moment(props.coverage_end_date).format("DD-MMM-YYYY").toUpperCase(): 
                <div style={styles.spacer}>&nbsp;</div>}
        </div>
        <div className="tk-bitter" style={styles.sub}>
        {(props.coverage_end_date)? "Coverage dates": "Date shipped"}&nbsp;
            <div className="tk-brandon-grotesque" style={{...styles.status, ...{color: (props.status === "active")? 'green': 'red'}}}>
                {(props.status === "active")? "ACTIVE": "EXPIRED"}
                <span style={styles.midpunct}>&nbsp;·</span>
            </div>
        </div>
        </>
    );
}

let styles = {
    spacer: {
        width: 106,
        display: 'inline-block'
    },
    sub: {
        color: 'gray', 
        fontSize: 12
    },
    status: {
        fontWeight: 900, 
        display: 'inline', 
        float: 'right'
    },
    midpunct: {
        fontSize: 32, 
        lineHeight: 0, 
        top: 3, 
        position: 'relative'
    }
};

export default CoverageDate;

import React from 'react';
import PolicyCard from './policycard';

import Media from 'react-media';

const PolicyCardContainer = props => (
    <Media query={{ maxWidth: 599 }}>
    {matches =>
        matches ? (
            <PolicyCard {...props} />
        ) : (
            <PolicyCard {...props} allowClick />
        )
    }
    </Media>
);

export default PolicyCardContainer;

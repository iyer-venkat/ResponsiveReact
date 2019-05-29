import '@babel/polyfill';

import React from 'react';

import { PolicyCards } from './components/policycards';

const styles = {
  uppercase: { textTransform: 'uppercase' }
};

const App = () => (
  <div style={{padding: 12}}>
    <h3 style={styles.uppercase}>Your policies</h3>
    <PolicyCards />
  </div>
);

export default App;

//https://www.figma.com/proto/fGW83zI7thrOaCjB3O4gHRAZ/DEV-Test?node-id=1%3A578&scaling=min-zoom&redirected=1
//https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking

//https://rebass-v2.now.sh/getting-started
//https://react-bootstrap.netlify.com/layout/grid/#col-props

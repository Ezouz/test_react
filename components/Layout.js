import React from 'react';
import Navbar from '../container/Header';

const layout = (props) => (
      <div>
        <Navbar />
        {/* Auth + routes */}
        {props.children}
        {/* <Footer /> */}
      </div>
);

export default layout;
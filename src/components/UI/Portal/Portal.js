import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children: renderComponent, destId }) => {
  return ReactDOM.createPortal(
    renderComponent,
    document.getElementById(destId)
  );
};

export default Portal;

import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
  const madeClass = 'card ' + className;
  return <div className={madeClass}>{children}</div>;
};

export default Card;

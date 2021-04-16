import React from 'react';
import { Container } from './styles';

const Button = ({ children, resetGame }) => {
  return <Container onClick={resetGame}>{children}</Container>;
};

export default Button;

import React from 'react';
import { Container } from './styles';

const ScoreBoard = ({ score }) => {
  const { computer, player } = score;

  return (
    <Container>
      <div>
        <span>Computador</span>
        <span className="score">{computer}</span>
      </div>

      <span className="versus-symbol">X</span>

      <div>
        <span>Você</span>
        <span className="score">{player}</span>
      </div>
    </Container>
  );
};

export default ScoreBoard;

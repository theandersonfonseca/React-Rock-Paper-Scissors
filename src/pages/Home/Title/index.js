import React from 'react';
import handImg from '../../../assets/hand.png';
import { Container } from './styles';

const Title = () => {
  return (
    <Container>
      <img src={handImg} alt="Rock Paper Scissors" />
      <h1>
        <span>Pedra</span>
        <span>Papel</span>
        <span>Tesoura</span>
      </h1>
      <img src={handImg} alt="Rock Paper Scissors" />
    </Container>
  );
};

export default Title;

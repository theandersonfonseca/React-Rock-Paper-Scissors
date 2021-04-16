import React from 'react';
import { Container } from './styles';
import RockImg from '../../../assets/rock.png';
import PaperImg from '../../../assets/paper.png';
import ScissorsImg from '../../../assets/scissors.png';

const Choices = ({ handleChoices }) => {
  return (
    <Container>
      <img src={RockImg} alt="Pedra" onClick={() => handleChoices('rock')} />
      <img src={PaperImg} alt="Papel" onClick={() => handleChoices('paper')} />
      <img
        src={ScissorsImg}
        alt="Tesoura"
        onClick={() => handleChoices('scissors')}
      />
    </Container>
  );
};

export default Choices;

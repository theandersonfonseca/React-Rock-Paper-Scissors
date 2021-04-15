import React from 'react';
import { Container } from './styles';
import RockImg from '../../../assets/rock.png';
import PaperImg from '../../../assets/paper.png';
import ScissorsImg from '../../../assets/scissors.png';

const Fight = ({ choices, message, animatedRock }) => {
  const { computer, player } = choices;

  const getImage = (choice) => {
    if (choice === 'rock' || !choice)
      return {
        image: RockImg,
        class: 'rock',
        alt: 'Pedra',
      };

    return {
      image: choice === 'paper' ? PaperImg : ScissorsImg,
      class: choice === 'paper' ? 'paper' : 'scissors',
      alt: choice === 'paper' ? 'Papel' : 'Tesoura',
    };
  };

  return (
    <Container animatedRock={animatedRock} message={message}>
      <img
        className={`left-${getImage(computer).class}`}
        src={getImage(computer).image}
        alt={getImage(computer).alt}
      />
      <p>{message}</p>
      <img
        className={`right-${getImage(player).class}`}
        src={getImage(player).image}
        alt={getImage(player).alt}
      />
    </Container>
  );
};

export default Fight;

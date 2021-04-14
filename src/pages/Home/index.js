import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Title from './Title';
import PlayButton from './PlayButton';
import Tributes from '../../components/Tributes';

const Home = () => {
  return (
    <Container>
      <Title />

      <Link to="/game">
        <PlayButton />
      </Link>

      <Tributes />
    </Container>
  );
};

export default Home;

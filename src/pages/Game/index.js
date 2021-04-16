import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Tributes from '../../components/Tributes/index';
import ScoreBoard from './ScoreBoard/index';
import Fight from './Fight/index';
import Choices from './Choices/index';
import Button from './Button/index';
import { GAME_RULES, MESSAGES } from '../../constants';

const Game = () => {
  const [score, setScore] = useState({ computer: 0, player: 0 });
  const [message, setMessage] = useState(MESSAGES.initial);
  const [animatedRock, setAnimatedRock] = useState(false);
  const [choices, setChoices] = useState({ computer: null, player: null });
  const timeout = useRef(null);

  const resetChoices = () => {
    timeout.current = setTimeout(() => {
      setChoices({
        computer: null,
        player: null,
      });

      setMessage(MESSAGES.initial);
    }, 1000);
  };

  const handleWinner = (winner) => {
    setScore((previousValues) => ({
      ...previousValues,
      [winner]: previousValues[winner] + 1,
    }));

    setMessage(
      winner
        ? winner === 'computer'
          ? MESSAGES.computerWinner
          : MESSAGES.playerWinner
        : MESSAGES.draw
    );

    resetChoices();
  };

  const handleResult = () => {
    const { computer, player } = choices;

    if (computer === player) return handleWinner();

    GAME_RULES.forEach((rule) => {
      if (rule.choice === player) {
        computer === rule.beats
          ? handleWinner('player')
          : handleWinner('computer');
      }
    });
  };

  useEffect(() => {
    if (!choices.computer && !choices.player) return;

    handleResult();
    //eslint-disable-next-line
  }, [choices]);

  const makeComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
  };

  const handleChoices = (playerChoice) => {
    if (message !== MESSAGES.initial) return;

    setAnimatedRock(true);
    setMessage(MESSAGES.loading);

    timeout.current = setTimeout(() => {
      setAnimatedRock(false);

      setChoices({
        computer: makeComputerChoice(),
        player: playerChoice,
      });
    }, 1500);
  };

  const resetGame = () => {
    setScore({ computer: 0, player: 0 });
    setMessage(MESSAGES.initial);
    setAnimatedRock(false);
    setChoices({ computer: null, player: null });
    clearTimeout(timeout.current);
  };

  return (
    <Container>
      <ScoreBoard score={score} />
      <Fight choices={choices} message={message} animatedRock={animatedRock} />
      <Choices handleChoices={handleChoices} />
      <section>
        <Button resetGame={resetGame}>Reiniciar</Button>
        <Link to="/">
          <Button resetGame={resetGame}>Início</Button>
        </Link>
      </section>
      <Tributes />
    </Container>
  );
};

export default Game;

import styled, { keyframes, css } from 'styled-components';
import { MESSAGES } from '../../../constants';

const animatedLeftRock = keyframes`
  0%,
  100% {
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateY(-30px) rotate(90deg);
  }
  30% {
    transform: translateY(15px) rotate(90deg);
  }
  45% {
    transform: translateY(-15px) rotate(90deg);
  }
  60% {
    transform: translateY(9px) rotate(90deg);
  }
  75% {
    transform: translateY(-6px) rotate(90deg);
  }
`;

const animatedRightRock = keyframes`
  0%,
  100% {
    transform: rotate(270deg);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateY(-30px) rotate(270deg);
  }
  30% {
    transform: translateY(15px) rotate(270deg);
  }
  45% {
    transform: translateY(-15px) rotate(270deg);
  }
  60% {
    transform: translateY(9px) rotate(270deg);
  }
  75% {
    transform: translateY(-6px) rotate(270deg);
  }
}
`;

export const Container = styled.section`
  ${({ theme }) => theme.center};
  margin-top: 10rem;

  @media (max-width: 550px) {
    flex-direction: column;
  }

  p {
    width: 20rem;
    max-width: 100%;
    margin: 0 3rem;
    color: ${({ theme, message }) => {
      if (message === MESSAGES.draw) return theme.blue;
      if (message === MESSAGES.playerWinner) return theme.green;
      if (message === MESSAGES.computerWinner) return theme.red;

      return theme.white;
    }};
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;

    @media (max-width: 550px) {
      margin: 3rem 0;
    }
  }

  img {
    width: 12rem;
    height: 12rem;

    &.left-rock {
      transform: rotate(90deg);
      animation: ${({ animatedRock }) =>
        animatedRock
          ? css`
              ${animatedLeftRock} 1s both
            `
          : ''};
    }

    &.right-rock {
      transform: rotate(270deg);
      animation: ${({ animatedRock }) =>
        animatedRock
          ? css`
              ${animatedRightRock} 1s both
            `
          : ''};
    }

    &.left-paper {
      transform: rotate(90deg);
    }

    &.right-paper {
      transform: rotate(270deg);
    }

    &.right-scissors {
      transform: rotate(190deg);
    }
  }
`;

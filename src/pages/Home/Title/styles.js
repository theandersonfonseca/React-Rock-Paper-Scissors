import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.center};

  h1 {
    margin: 0 5rem;
    font-size: 8rem;
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-family: 'Lobster', cursive;

    span {
      display: block;
    }

    @media (max-width: 800px) {
      font-size: 6rem;
      margin: 0 3rem;
    }
  }

  img {
    width: 20rem;
    max-width: 100%;
    height: 20rem;

    @media (max-width: 800px) {
      width: 15rem;
      height: 15rem;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

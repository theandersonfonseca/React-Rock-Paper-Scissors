import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.center};
  margin-top: 10rem;

  img {
    width: 8rem;
    height: 8rem;
    padding: 1rem;
    border: solid 0.1rem ${({ theme }) => theme.white};
    border-radius: 50%;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 350px) {
      width: 6rem;
      height: 6rem;
    }
  }

  img:not(:first-child) {
    margin-left: 3rem;
  }
`;

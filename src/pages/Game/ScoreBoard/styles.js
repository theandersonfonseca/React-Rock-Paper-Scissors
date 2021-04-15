import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.center};

  @media (max-width: 550px) {
    flex-direction: column;
  }

  div {
    ${({ theme }) => theme.center};
    flex-direction: column;
  }

  .score {
    margin-top: 3rem;
    padding: 1rem;
    background: ${({ theme }) => theme.red};
  }

  span {
    display: inline-block;
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    text-transform: uppercase;
  }

  .versus-symbol {
    margin: 0 15rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.red};

    @media (max-width: 550px) {
      margin: 3rem 0;
    }
  }
`;

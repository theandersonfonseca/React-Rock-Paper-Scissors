import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  ${({ theme }) => theme.center};
  min-height: 100vh;
  width: 80rem;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 550px) {
    justify-content: start;
  }

  section {
    margin-top: 10rem;
    display: flex;

    @media (max-width: 550px) {
      margin-top: 3rem;
    }
  }
`;

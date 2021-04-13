import styled from 'styled-components';

export const Container = styled.span`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.white};

  a {
    color: ${({ theme }) => theme.green};
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

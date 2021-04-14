import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 10rem;
  padding: 1.5rem 5rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${({ theme }) => theme.green};
  transition: 0.4s;

  i {
    font-size: 3rem;
    color: ${({ theme }) => theme.dark};
    pointer-events: none;
  }

  &:hover {
    background: ${({ theme }) => theme.greenDark};
  }
`;

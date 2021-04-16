import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s;
  font-size: 1.4rem;

  &:hover {
    opacity: 0.8;
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

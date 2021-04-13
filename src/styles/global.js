import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 62.5%; 
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.dark};
  }
  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    
  }
  button {
    cursor: pointer;
  }
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

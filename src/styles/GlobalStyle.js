import { createGlobalStyle } from "styled-components";
import { tokens } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${tokens.colors.canvas};
    color: ${tokens.colors.ink};
    font-family: ${tokens.fonts.body};
  }

  h1, h2, h3 {
    font-family: ${tokens.fonts.display};
    margin: 0;
  }

  button, input {
    font-family: inherit;
  }

  :focus-visible {
    outline: 2px solid ${tokens.colors.ink};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

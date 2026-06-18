import styled, { css } from "styled-components";
import { tokens } from "../../styles/tokens";

const variantes = {
  primary: css`
    background-color: ${tokens.colors.sunshine};
    color: ${tokens.colors.ink};
  `,
  secondary: css`
    background-color: ${tokens.colors.surface};
    color: ${tokens.colors.ink};
  `,
  danger: css`
    background-color: ${tokens.colors.coral};
    color: ${tokens.colors.ink};
  `,
  ghost: css`
    background-color: transparent;
    color: ${tokens.colors.ink};
  `,
};

export const Botao = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${tokens.shadow.hardSm};
  transition: transform 0.05s ease, box-shadow 0.05s ease, filter 0.15s ease;

  ${(props) => variantes[props.$variante] || variantes.primary}

  &:hover:not(:disabled) {
    filter: brightness(0.96);
  }

  &:active:not(:disabled) {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

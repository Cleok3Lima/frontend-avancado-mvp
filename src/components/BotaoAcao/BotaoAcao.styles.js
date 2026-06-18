import styled, { css } from "styled-components";

const variantes = {
  primary: css`
    background-color: #2563eb;
    color: #fff;
    &:hover {
      background-color: #1d4ed8;
    }
  `,
  secondary: css`
    background-color: #e5e7eb;
    color: #1f2937;
    &:hover {
      background-color: #d1d5db;
    }
  `,
  danger: css`
    background-color: #dc2626;
    color: #fff;
    &:hover {
      background-color: #b91c1c;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #2563eb;
    border: 1px solid #2563eb;
    &:hover {
      background-color: #eff6ff;
    }
  `,
};

export const Botao = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.05s ease;

  ${(props) => variantes[props.$variante] || variantes.primary}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;

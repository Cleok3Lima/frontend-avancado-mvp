import styled, { keyframes } from "styled-components";
import { tokens } from "../../styles/tokens";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 1rem;
  text-align: center;
`;

export const Spinner = styled.span`
  display: block;
  width: 3rem;
  height: 3rem;
  border: 4px solid ${tokens.colors.ink};
  border-top-color: ${tokens.colors.bubblegum};
  border-radius: 50%;
  box-shadow: ${tokens.shadow.hardSm};
  animation: ${spin} 0.8s linear infinite;
`;

export const Message = styled.p`
  margin: 0;
  color: ${tokens.colors.ink};
  opacity: 0.7;
  font-size: 1.1rem;
`;

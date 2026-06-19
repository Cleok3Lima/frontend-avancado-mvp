import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1.5rem;
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${tokens.colors.sunshine};
`;

export const Titulo = styled.h1`
  margin: 0;
  color: ${tokens.colors.ink};
`;

export const Mensagem = styled.p`
  margin: 0;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3rem 1rem;
  color: ${tokens.colors.ink};
  opacity: 0.7;
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
`;

export const Mensagem = styled.p`
  font-size: 1rem;
  margin: 0;
`;

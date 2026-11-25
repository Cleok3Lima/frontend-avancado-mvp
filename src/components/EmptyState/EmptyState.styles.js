import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing.sm};
  padding: 3rem ${tokens.spacing.md};
  color: ${tokens.colors.ink};
  opacity: 0.7;
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  margin: 0;
`;

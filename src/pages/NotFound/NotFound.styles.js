import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing.md};
  padding: 4rem ${tokens.spacing.xl};
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${tokens.colors.sunshine};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${tokens.colors.ink};
`;

export const Message = styled.p`
  margin: 0;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

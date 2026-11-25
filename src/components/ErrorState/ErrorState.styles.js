import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing.md};
  padding: 3rem 0;
  color: ${tokens.colors.ink};
  font-weight: 600;
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 1.6rem;
  color: ${tokens.colors.ink};
  background-color: ${tokens.colors.coral};
  border: 2px solid ${tokens.colors.ink};
`;

export const Message = styled.p`
  margin: 0;
`;

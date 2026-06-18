import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: ${tokens.colors.surface};
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hardSm};
  padding: 1.25rem 1rem;
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
  background-color: ${(props) => props.$cor || tokens.colors.periwinkle};
  border: 2px solid ${tokens.colors.ink};
`;

export const Nome = styled.h3`
  font-size: 1.05rem;
  color: ${tokens.colors.ink};
`;

export const Stats = styled.span`
  font-size: 0.85rem;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

export const Acoes = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

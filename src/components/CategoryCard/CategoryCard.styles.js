import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing.xs};
  background-color: ${tokens.colors.surface};
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hardSm};
  padding: ${tokens.spacing.lg} ${tokens.spacing.md};
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
  background-color: ${(props) => props.$color || tokens.colors.periwinkle};
  border: 2px solid ${tokens.colors.ink};
`;

export const Name = styled.h3`
  font-size: 1.05rem;
  color: ${tokens.colors.ink};
`;

export const EnergyBar = styled.div`
  display: flex;
  gap: 2px;
  width: 100%;
  max-width: 240px;
  height: 16px;
  margin-top: 0.25rem;
  background-color: ${tokens.colors.ink};
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  overflow: hidden;
`;

export const EnergyCell = styled.span`
  flex: 1;
  background-color: ${(props) => props.$color || tokens.colors.surface};
`;

export const Stats = styled.span`
  font-size: 0.85rem;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${tokens.spacing.xs};
  width: 100%;
  margin-top: ${tokens.spacing.xs};

  & > * {
    flex: 1;
    justify-content: center;
  }
`;

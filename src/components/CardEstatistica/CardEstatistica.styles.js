import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Card = styled.div`
  display: flex;
  align-items: stretch;
  min-width: 160px;
  flex: 1 1 160px;
  background-color: ${tokens.colors.surface};
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hardSm};
  overflow: hidden;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
  padding: 0.9rem 1rem;
  flex: 1;
`;

export const Valor = styled.span`
  font-family: ${tokens.fonts.display};
  font-size: 1.6rem;
  font-weight: 700;
  color: ${tokens.colors.ink};
`;

export const Titulo = styled.span`
  font-size: 0.8rem;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  font-size: 1.5rem;
  color: ${tokens.colors.ink};
  background-color: ${(props) => props.$cor || tokens.colors.periwinkle};
  border-left: 2px solid ${tokens.colors.ink};
`;

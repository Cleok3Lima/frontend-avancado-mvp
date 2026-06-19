import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalBox = styled.div`
  background-color: ${tokens.colors.surface};
  border: 3px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hard};
  padding: 1.5rem;
  max-width: 360px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${tokens.colors.coral};
`;

export const Titulo = styled.h2`
  font-size: 1.1rem;
  color: ${tokens.colors.ink};
`;

export const Mensagem = styled.p`
  margin: 0;
  color: ${tokens.colors.ink};
  opacity: 0.75;
  font-size: 0.9rem;
`;

export const Acoes = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

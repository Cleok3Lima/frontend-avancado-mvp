import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { tokens } from "../../styles/tokens";

export const CardWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.$cor || tokens.colors.bubblegum};
  background-image: linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
  background-size: 24px 24px;
  border: 3px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hard};
  min-height: 220px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  text-align: center;
  overflow: hidden;

  @media (max-width: 640px) {
    min-height: 160px;
    padding: 1.25rem;
  }
`;

export const SparkleSuperior = styled(FaStar)`
  position: absolute;
  top: 0.85rem;
  right: 1rem;
  font-size: 1.1rem;
  color: ${tokens.colors.surface};
  opacity: 0.85;
`;

export const SparkleInferior = styled(FaStar)`
  position: absolute;
  bottom: 0.85rem;
  left: 1rem;
  font-size: 0.85rem;
  color: ${tokens.colors.surface};
  opacity: 0.85;
`;

export const SparkleComemoracao = styled(FaStar)`
  position: absolute;
  top: 0.85rem;
  left: 1rem;
  font-size: 1.3rem;
  color: ${tokens.colors.sunshine};
  animation: pop 0.4s ease;

  @keyframes pop {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.3);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  background-color: ${tokens.colors.surface};
  color: ${tokens.colors.ink};
`;

export const Face = styled.p`
  font-family: ${tokens.fonts.display};
  font-size: 1.3rem;
  font-weight: 700;
  color: ${tokens.colors.ink};
  margin: 0;
`;

export const Dica = styled.span`
  font-size: 0.85rem;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

export const Progresso = styled.span`
  position: absolute;
  bottom: 0.85rem;
  right: 1rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${tokens.colors.ink};
  background-color: ${tokens.colors.surface};
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  padding: 0.15rem 0.6rem;
`;

export const Acoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

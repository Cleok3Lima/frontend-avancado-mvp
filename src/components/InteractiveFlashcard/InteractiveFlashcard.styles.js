import styled, { css } from "styled-components";
import { FaStar } from "react-icons/fa";
import { tokens } from "../../styles/tokens";

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 480px;
  margin: 0 auto;
  perspective: 1200px;
  cursor: pointer;
  border-radius: ${tokens.radii.sm};
`;

export const CardInner = styled.div`
  display: grid;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  transform: ${(props) => (props.$flipped ? "rotateY(180deg)" : "none")};
`;

const face = css`
  grid-area: 1 / 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing.xs};
  min-height: 220px;
  padding: ${tokens.spacing.xl};
  border: 3px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hard};
  text-align: center;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-size: 24px 24px;

  @media (max-width: 640px) {
    min-height: 160px;
    padding: ${tokens.spacing.lg};
  }
`;

export const Front = styled.div`
  ${face}
  background-color: ${(props) => props.$color || tokens.colors.bubblegum};
  background-image: linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
`;

export const Back = styled.div`
  ${face}
  transform: rotateY(180deg);
  background-color: ${tokens.colors.surface};
  background-image: linear-gradient(rgba(26, 26, 26, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.06) 1px, transparent 1px);
`;

export const TopSparkle = styled(FaStar)`
  position: absolute;
  top: 0.85rem;
  right: 1rem;
  font-size: 1.1rem;
  color: ${tokens.colors.surface};
  opacity: 0.85;
`;

export const BottomSparkle = styled(FaStar)`
  position: absolute;
  bottom: 0.85rem;
  left: 1rem;
  font-size: 0.85rem;
  color: ${tokens.colors.surface};
  opacity: 0.85;
`;

export const CelebrationSparkle = styled(FaStar)`
  position: absolute;
  top: 0.85rem;
  left: 1rem;
  z-index: 1;
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

export const AnswerBadge = styled(StatusBadge)`
  background-color: ${(props) => props.$color || tokens.colors.bubblegum};
`;

export const Face = styled.p`
  font-family: ${tokens.fonts.display};
  font-size: 1.3rem;
  font-weight: 700;
  color: ${tokens.colors.ink};
  margin: 0;
`;

export const FlipHint = styled.span`
  font-size: 0.85rem;
  color: ${tokens.colors.ink};
  opacity: 0.7;
`;

export const Progress = styled.span`
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

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing.sm};
  margin-top: ${tokens.spacing.md};
  flex-wrap: wrap;
`;

import styled, { keyframes } from "styled-components";
import { tokens } from "../../styles/tokens";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const TooltipText = styled.span`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(calc(-50% + var(--shift, 0px)));
  width: max-content;
  max-width: min(240px, calc(100vw - 16px));
  background-color: ${tokens.colors.ink};
  color: ${tokens.colors.surface};
  padding: 0.35rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.35;
  text-align: center;
  white-space: normal;
  pointer-events: none;
  z-index: 10;
  animation: ${fadeIn} 0.15s ease;
`;

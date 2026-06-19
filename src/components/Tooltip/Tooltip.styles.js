import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover > span[role="tooltip"],
  &:focus > span[role="tooltip"],
  &:focus-within > span[role="tooltip"] {
    opacity: 1;
    visibility: visible;
  }
`;

export const TooltipText = styled.span`
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${tokens.colors.ink};
  color: ${tokens.colors.surface};
  padding: 0.35rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease;
  pointer-events: none;
  z-index: 10;
`;

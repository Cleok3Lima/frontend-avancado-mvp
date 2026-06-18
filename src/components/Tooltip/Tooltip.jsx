import { TooltipWrapper, TooltipText } from "./Tooltip.styles";

export function Tooltip({ texto, children }) {
  return (
    <TooltipWrapper tabIndex={0}>
      {children}
      <TooltipText role="tooltip">{texto}</TooltipText>
    </TooltipWrapper>
  );
}

import { TooltipWrapper, TooltipText } from "./Tooltip.styles";

export function Tooltip({ text, children }) {
  return (
    <TooltipWrapper tabIndex={0}>
      {children}
      <TooltipText role="tooltip">{text}</TooltipText>
    </TooltipWrapper>
  );
}

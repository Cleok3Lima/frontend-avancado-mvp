import { useState, useRef, useLayoutEffect } from "react";
import { TooltipWrapper, TooltipText } from "./Tooltip.styles";

const VIEWPORT_MARGIN = 8;

export function Tooltip({ text, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!isOpen || !element) return;
    element.style.setProperty("--shift", "0px");
    const rect = element.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    let shift = 0;
    if (rect.left < VIEWPORT_MARGIN) {
      shift = VIEWPORT_MARGIN - rect.left;
    } else if (rect.right > viewportWidth - VIEWPORT_MARGIN) {
      shift = viewportWidth - VIEWPORT_MARGIN - rect.right;
    }
    element.style.setProperty("--shift", `${shift}px`);
  }, [isOpen]);

  return (
    <TooltipWrapper
      tabIndex={0}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      <TooltipText ref={textRef} role="tooltip" $isOpen={isOpen}>
        {text}
      </TooltipText>
    </TooltipWrapper>
  );
}

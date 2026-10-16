import { Button } from "./ActionButton.styles";

export function ActionButton({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) {
  return (
    <Button type={type} $variant={variant} onClick={onClick} disabled={disabled} {...rest}>
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </Button>
  );
}

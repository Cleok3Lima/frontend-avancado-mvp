import { Botao } from "./ActionButton.styles";

export function ActionButton({
  children,
  variante = "primary",
  icone: Icone,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) {
  return (
    <Botao type={type} $variante={variante} onClick={onClick} disabled={disabled} {...rest}>
      {Icone && <Icone aria-hidden="true" />}
      {children}
    </Botao>
  );
}

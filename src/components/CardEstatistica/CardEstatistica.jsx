import { Card, IconWrapper, Texts, Valor, Titulo } from "./CardEstatistica.styles";
import { Tooltip } from "../Tooltip/Tooltip";

export function CardEstatistica({ titulo, valor, cor, icone: Icone, dica }) {
  return (
    <Card>
      <Texts>
        <Valor>{valor}</Valor>
        <Titulo>{titulo}</Titulo>
      </Texts>
      {Icone && (
        <IconWrapper $cor={cor}>
          {dica ? (
            <Tooltip texto={dica}>
              <Icone aria-hidden="true" />
            </Tooltip>
          ) : (
            <Icone aria-hidden="true" />
          )}
        </IconWrapper>
      )}
    </Card>
  );
}

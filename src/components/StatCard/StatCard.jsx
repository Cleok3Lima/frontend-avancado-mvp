import { Card, IconWrapper, Texts, Value, Title } from "./StatCard.styles";
import { Tooltip } from "../Tooltip/Tooltip";

export function StatCard({ titulo, valor, cor, icone: Icone, dica }) {
  return (
    <Card>
      <Texts>
        <Value>{valor}</Value>
        <Title>{titulo}</Title>
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

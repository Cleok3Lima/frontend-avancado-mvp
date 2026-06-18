import { Card, IconWrapper, Texts, Valor, Titulo } from "./CardEstatistica.styles";
import { Tooltip } from "../Tooltip/Tooltip";

export function CardEstatistica({ titulo, valor, cor, icone: Icone, dica }) {
  const conteudoIcone = Icone ? (
    <IconWrapper $cor={cor}>
      <Icone aria-hidden="true" />
    </IconWrapper>
  ) : null;

  return (
    <Card>
      <Texts>
        <Valor>{valor}</Valor>
        <Titulo>{titulo}</Titulo>
      </Texts>
      {dica ? <Tooltip texto={dica}>{conteudoIcone}</Tooltip> : conteudoIcone}
    </Card>
  );
}

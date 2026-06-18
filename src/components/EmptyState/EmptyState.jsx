import { FaInbox } from "react-icons/fa";
import { Wrapper, IconWrapper, Mensagem } from "./EmptyState.styles";

export function EmptyState({ mensagem = "Nenhum item encontrado", icone: Icone = FaInbox }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icone aria-hidden="true" />
      </IconWrapper>
      <Mensagem>{mensagem}</Mensagem>
    </Wrapper>
  );
}

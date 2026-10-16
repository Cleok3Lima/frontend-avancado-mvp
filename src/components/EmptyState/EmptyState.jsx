import { FaInbox } from "react-icons/fa";
import { Wrapper, IconWrapper, Message } from "./EmptyState.styles";

export function EmptyState({ mensagem = "Nenhum item encontrado", icone: Icone = FaInbox }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icone aria-hidden="true" />
      </IconWrapper>
      <Message>{mensagem}</Message>
    </Wrapper>
  );
}

import { FaInbox } from "react-icons/fa";
import { Wrapper, IconWrapper, Message } from "./EmptyState.styles";

export function EmptyState({ message = "Nenhum item encontrado", icon: Icon = FaInbox }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon aria-hidden="true" />
      </IconWrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
}

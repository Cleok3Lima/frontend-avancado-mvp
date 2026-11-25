import { FaExclamationTriangle } from "react-icons/fa";
import { ActionButton } from "../ActionButton/ActionButton";
import { Wrapper, IconWrapper, Message } from "./ErrorState.styles";

export function ErrorState({ onRetry }) {
  return (
    <Wrapper role="alert">
      <IconWrapper>
        <FaExclamationTriangle aria-hidden="true" />
      </IconWrapper>
      <Message>Não foi possível carregar os cards. Verifique sua conexão e tente novamente.</Message>
      <ActionButton variant="primary" onClick={onRetry}>
        Tentar novamente
      </ActionButton>
    </Wrapper>
  );
}

import { ActionButton } from "../ActionButton/ActionButton";
import { Wrapper } from "./ErrorState.styles";

export function ErrorState({ onRetry }) {
  return (
    <Wrapper role="alert">
      <p>Não foi possível carregar os cards. Verifique sua conexão e tente novamente.</p>
      <ActionButton variant="primary" onClick={onRetry}>
        Tentar novamente
      </ActionButton>
    </Wrapper>
  );
}

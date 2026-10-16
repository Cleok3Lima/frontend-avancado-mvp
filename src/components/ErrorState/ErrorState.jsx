import { ActionButton } from "../ActionButton/ActionButton";
import { Wrapper } from "./ErrorState.styles";

export function ErrorState({ onTentarNovamente }) {
  return (
    <Wrapper role="alert">
      <p>Não foi possível carregar os cards. Verifique sua conexão e tente novamente.</p>
      <ActionButton variante="primary" onClick={onTentarNovamente}>
        Tentar novamente
      </ActionButton>
    </Wrapper>
  );
}

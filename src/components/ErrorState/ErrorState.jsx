import { BotaoAcao } from "../BotaoAcao/BotaoAcao";
import { Wrapper } from "./ErrorState.styles";

export function ErrorState({ onTentarNovamente }) {
  return (
    <Wrapper role="alert">
      <p>Não foi possível carregar os cards. Verifique sua conexão e tente novamente.</p>
      <BotaoAcao variante="primary" onClick={onTentarNovamente}>
        Tentar novamente
      </BotaoAcao>
    </Wrapper>
  );
}

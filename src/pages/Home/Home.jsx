import { FaCheck, FaTimes } from "react-icons/fa";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { Tooltip } from "../../components/Tooltip/Tooltip";

export function Home() {
  return (
    <div style={{ padding: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      <BotaoAcao variante="primary" icone={FaCheck} onClick={() => console.log("primary clicado")}>
        Primary
      </BotaoAcao>
      <BotaoAcao variante="secondary" onClick={() => console.log("secondary clicado")}>
        Secondary
      </BotaoAcao>
      <BotaoAcao variante="danger" icone={FaTimes} onClick={() => console.log("danger clicado")}>
        Danger
      </BotaoAcao>
      <BotaoAcao variante="ghost" onClick={() => console.log("ghost clicado")}>
        Ghost
      </BotaoAcao>
      <BotaoAcao variante="primary" disabled>
        Desabilitado
      </BotaoAcao>
      <Tooltip texto="Isto é uma dica explicativa">
        <BotaoAcao variante="secondary">Passe o mouse aqui</BotaoAcao>
      </Tooltip>
    </div>
  );
}

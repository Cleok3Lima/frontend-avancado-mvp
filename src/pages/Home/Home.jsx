import { FaCheck, FaTimes, FaListUl, FaCheckCircle, FaClock } from "react-icons/fa";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { EmptyState } from "../../components/EmptyState/EmptyState";

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
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <CardEstatistica titulo="Total Cards" valor={60} cor="#2563eb" icone={FaListUl} />
        <CardEstatistica
          titulo="Mastered"
          valor={2}
          cor="#16a34a"
          icone={FaCheckCircle}
          dica="Cards que você já acertou"
        />
        <CardEstatistica titulo="In Progress" valor={1} cor="#f59e0b" icone={FaClock} />
      </div>
      <EmptyState mensagem="Nenhum cartão encontrado nesta categoria" />
    </div>
  );
}

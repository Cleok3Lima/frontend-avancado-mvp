import { useState } from "react";
import { FaCheck, FaTimes, FaListUl, FaCheckCircle, FaClock } from "react-icons/fa";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal";
import { useFlashcards } from "../../context/FlashcardsContext";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";

export function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const { categories, isLoading } = useFlashcards();

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
      <BotaoAcao variante="danger" onClick={() => setModalAberto(true)}>
        Abrir modal de teste
      </BotaoAcao>
      <ConfirmModal
        aberto={modalAberto}
        titulo="Confirmar ação"
        mensagem="Isto é apenas um teste do ConfirmModal."
        onConfirmar={() => {
          console.log("confirmado");
          setModalAberto(false);
        }}
        onCancelar={() => setModalAberto(false)}
      />
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
        {!isLoading && categories.map((categoria) => (
          <CategoryCard key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

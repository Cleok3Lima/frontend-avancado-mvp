import { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaSyncAlt } from "react-icons/fa";
import { BotaoAcao } from "../BotaoAcao/BotaoAcao";
import { CardWrapper, StatusBadge, Face, Acoes } from "./FlashcardInterativo.styles";

const STATUS_LABEL = {
  new: "Novo",
  in_progress: "Em progresso",
  mastered: "Dominado",
};

export function FlashcardInterativo({ card, modoLeitura = false, onAcertar, onErrar }) {
  const [virado, setVirado] = useState(false);

  useEffect(() => {
    setVirado(false);
  }, [card.id]);

  function handleVirar() {
    setVirado((atual) => !atual);
  }

  useEffect(() => {
    if (modoLeitura) return;

    function handleKeyDown(e) {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleVirar();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modoLeitura]);

  return (
    <div>
      <CardWrapper onClick={handleVirar} role="button" tabIndex={0} $virado={virado}>
        <StatusBadge $status={card.status}>{STATUS_LABEL[card.status]}</StatusBadge>
        <Face>{virado ? card.answer : card.question}</Face>
      </CardWrapper>

      {!modoLeitura && (
        <Acoes>
          <BotaoAcao variante="secondary" icone={FaSyncAlt} onClick={handleVirar}>
            Virar
          </BotaoAcao>
          <BotaoAcao variante="primary" icone={FaCheck} onClick={() => onAcertar(card.id)}>
            Acertei
          </BotaoAcao>
          <BotaoAcao variante="danger" icone={FaTimes} onClick={() => onErrar(card.id)}>
            Errei
          </BotaoAcao>
        </Acoes>
      )}
    </div>
  );
}

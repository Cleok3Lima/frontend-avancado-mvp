import { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaSyncAlt, FaStar } from "react-icons/fa";
import { BotaoAcao } from "../BotaoAcao/BotaoAcao";
import {
  CardWrapper,
  SparkleSuperior,
  SparkleInferior,
  SparkleComemoracao,
  StatusBadge,
  Face,
  Dica,
  Progresso,
  Acoes,
} from "./FlashcardInterativo.styles";

const STATUS_LABEL = {
  new: "Novo",
  in_progress: "Em progresso",
  mastered: "Dominado",
};

export function FlashcardInterativo({ card, corCategoria, progresso, modoLeitura = false, onAcertar, onErrar }) {
  const [virado, setVirado] = useState(false);
  const [comemorando, setComemorando] = useState(false);

  useEffect(() => {
    setVirado(false);
  }, [card.id]);

  useEffect(() => {
    if (!comemorando) return;
    const timer = setTimeout(() => setComemorando(false), 400);
    return () => clearTimeout(timer);
  }, [comemorando]);

  function handleVirar() {
    setVirado((atual) => !atual);
  }

  function handleAcertarClick() {
    setComemorando(true);
    onAcertar(card.id);
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
      <CardWrapper onClick={handleVirar} role="button" tabIndex={0} $cor={corCategoria}>
        <SparkleSuperior aria-hidden="true" />
        <SparkleInferior aria-hidden="true" />
        {comemorando && <SparkleComemoracao aria-hidden="true" />}
        <StatusBadge $status={card.status}>
          {card.status === "mastered" && <FaStar aria-hidden="true" />}
          {STATUS_LABEL[card.status]}
        </StatusBadge>
        <Face>{virado ? card.answer : card.question}</Face>
        {!virado && <Dica>Clique para virar</Dica>}
        {progresso && <Progresso>{progresso}</Progresso>}
      </CardWrapper>

      {!modoLeitura && (
        <Acoes>
          <BotaoAcao variante="secondary" icone={FaSyncAlt} onClick={handleVirar}>
            Virar
          </BotaoAcao>
          <BotaoAcao variante="primary" icone={FaCheck} onClick={handleAcertarClick}>
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

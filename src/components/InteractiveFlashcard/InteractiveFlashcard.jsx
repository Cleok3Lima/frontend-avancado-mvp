import { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaSyncAlt, FaStar } from "react-icons/fa";
import { ActionButton } from "../ActionButton/ActionButton";
import {
  CardWrapper,
  TopSparkle,
  BottomSparkle,
  CelebrationSparkle,
  StatusBadge,
  Face,
  FlipHint,
  Progress,
  Actions,
} from "./InteractiveFlashcard.styles";

const STATUS_LABEL = {
  new: "Novo",
  in_progress: "Em progresso",
  mastered: "Dominado",
};

export function InteractiveFlashcard({ card, categoryColor, progress, readOnly = false, onCorrect, onWrong }) {
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

  function handleKeyDownCard(e) {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      handleVirar();
    }
  }

  function handleAcertarClick() {
    setComemorando(true);
    onCorrect(card.id);
  }

  useEffect(() => {
    if (readOnly) return;

    function handleKeyDown(e) {
      if (e.target.closest?.("button, a, input, textarea, select, [role=button]")) return;
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleVirar();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [readOnly]);

  return (
    <div>
      <CardWrapper onClick={handleVirar} onKeyDown={handleKeyDownCard} role="button" tabIndex={0} $color={categoryColor}>
        <TopSparkle aria-hidden="true" />
        <BottomSparkle aria-hidden="true" />
        {comemorando && <CelebrationSparkle aria-hidden="true" />}
        <StatusBadge $status={card.status}>
          {card.status === "mastered" && <FaStar aria-hidden="true" />}
          {STATUS_LABEL[card.status]}
        </StatusBadge>
        <Face>{virado ? card.answer : card.question}</Face>
        {!virado && <FlipHint>Clique para virar</FlipHint>}
        {progress && <Progress>{progress}</Progress>}
      </CardWrapper>

      {!readOnly && (
        <Actions>
          <ActionButton variant="secondary" icon={FaSyncAlt} onClick={handleVirar}>
            Virar
          </ActionButton>
          <ActionButton variant="primary" icon={FaCheck} onClick={handleAcertarClick}>
            Acertei
          </ActionButton>
          <ActionButton variant="danger" icon={FaTimes} onClick={() => onWrong(card.id)}>
            Errei
          </ActionButton>
        </Actions>
      )}
    </div>
  );
}

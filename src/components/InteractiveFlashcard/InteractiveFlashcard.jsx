import { useState, useEffect, useCallback } from "react";
import { FaCheck, FaTimes, FaSyncAlt, FaStar } from "react-icons/fa";
import { ActionButton } from "../ActionButton/ActionButton";
import {
  CardWrapper,
  CardInner,
  Front,
  Back,
  TopSparkle,
  BottomSparkle,
  CelebrationSparkle,
  StatusBadge,
  AnswerBadge,
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
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [celebrating, setCelebrating] = useState(false);
  const flipped = flippedCardId === card.id;

  useEffect(() => {
    if (!celebrating) return;
    const timer = setTimeout(() => setCelebrating(false), 400);
    return () => clearTimeout(timer);
  }, [celebrating]);

  const handleFlip = useCallback(() => {
    setFlippedCardId((current) => (current === card.id ? null : card.id));
  }, [card.id]);

  function handleKeyDownCard(e) {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      handleFlip();
    }
  }

  function handleCorrectClick() {
    setCelebrating(true);
    onCorrect(card.id);
  }

  useEffect(() => {
    if (readOnly) return;

    function handleKeyDown(e) {
      if (e.target.closest?.("button, a, input, textarea, select, [role=button]")) return;
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleFlip();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [readOnly, handleFlip]);

  return (
    <div>
      <CardWrapper onClick={handleFlip} onKeyDown={handleKeyDownCard} role="button" tabIndex={0}>
        {celebrating && <CelebrationSparkle aria-hidden="true" />}
        <CardInner key={card.id} $flipped={flipped}>
          <Front $color={categoryColor} aria-hidden={flipped}>
            <TopSparkle aria-hidden="true" />
            <BottomSparkle aria-hidden="true" />
            <StatusBadge>
              {card.status === "mastered" && <FaStar aria-hidden="true" />}
              {STATUS_LABEL[card.status]}
            </StatusBadge>
            <Face>{card.question}</Face>
            <FlipHint>Clique para virar</FlipHint>
            {progress && <Progress>{progress}</Progress>}
          </Front>
          <Back aria-hidden={!flipped}>
            <AnswerBadge $color={categoryColor}>Resposta</AnswerBadge>
            <Face>{card.answer}</Face>
            <FlipHint>Clique para ver a pergunta</FlipHint>
          </Back>
        </CardInner>
      </CardWrapper>

      {!readOnly && (
        <Actions>
          <ActionButton variant="secondary" icon={FaSyncAlt} onClick={handleFlip}>
            Virar
          </ActionButton>
          <ActionButton variant="primary" icon={FaCheck} onClick={handleCorrectClick}>
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

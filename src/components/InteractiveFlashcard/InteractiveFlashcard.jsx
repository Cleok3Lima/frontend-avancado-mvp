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
  const [flipped, setFlipped] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [card.id]);

  useEffect(() => {
    if (!celebrating) return;
    const timer = setTimeout(() => setCelebrating(false), 400);
    return () => clearTimeout(timer);
  }, [celebrating]);

  function handleFlip() {
    setFlipped((current) => !current);
  }

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
  }, [readOnly]);

  return (
    <div>
      <CardWrapper onClick={handleFlip} onKeyDown={handleKeyDownCard} role="button" tabIndex={0} $color={categoryColor}>
        <TopSparkle aria-hidden="true" />
        <BottomSparkle aria-hidden="true" />
        {celebrating && <CelebrationSparkle aria-hidden="true" />}
        <StatusBadge $status={card.status}>
          {card.status === "mastered" && <FaStar aria-hidden="true" />}
          {STATUS_LABEL[card.status]}
        </StatusBadge>
        <Face>{flipped ? card.answer : card.question}</Face>
        {!flipped && <FlipHint>Clique para virar</FlipHint>}
        {progress && <Progress>{progress}</Progress>}
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

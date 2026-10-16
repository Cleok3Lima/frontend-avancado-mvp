import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaKeyboard, FaClock, FaCheck, FaTimes } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { InteractiveFlashcard } from "../../components/InteractiveFlashcard/InteractiveFlashcard";
import { StatCard } from "../../components/StatCard/StatCard";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { ErrorState } from "../../components/ErrorState/ErrorState";
import { NotFound } from "../NotFound/NotFound";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { tokens } from "../../styles/tokens";
import {
  Wrapper,
  Title,
  Layout,
  Panel,
  Divider,
  CategoryBadge,
  CardArea,
  StatsHeading,
  StatsRow,
  CompletionStats,
  ShortcutsHint,
  CompletionBox,
} from "./StudyMode.styles";

export function StudyMode() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, getCardsByCategory, getCategoryStats, markCorrect, markWrong, isLoading, error, reloadData } = useFlashcards();

  const category = categories.find((c) => c.id === categoryId);
  const categoryCards = getCardsByCategory(categoryId);
  const categoryStats = getCategoryStats(categoryId);

  const [queue, setQueue] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [session, setSession] = useState({ correct: 0, wrong: 0 });

  useEffect(() => {
    setQueue([]);
    setInitialized(false);
    setSession({ correct: 0, wrong: 0 });
  }, [categoryId]);

  useEffect(() => {
    if (!isLoading && !error && !initialized) {
      setQueue(categoryCards.map((card) => card.id));
      setInitialized(true);
    }
  }, [isLoading, error, initialized, categoryCards]);

  const currentCard = initialized ? categoryCards.find((card) => card.id === queue[0]) : undefined;

  const handleCorrect = useCallback(
    (cardId) => {
      markCorrect(cardId);
      setSession((s) => ({ ...s, correct: s.correct + 1 }));
      setQueue((q) => q.slice(1));
    },
    [markCorrect]
  );

  const handleWrong = useCallback(
    (cardId) => {
      markWrong(cardId);
      setSession((s) => ({ ...s, wrong: s.wrong + 1 }));
      setQueue((q) => [...q.slice(1), cardId]);
    },
    [markWrong]
  );

  function handleStudyAgain() {
    setQueue(categoryCards.map((card) => card.id));
    setSession({ correct: 0, wrong: 0 });
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (!currentCard) return;
      if (e.code === "ArrowRight" || e.code === "Digit1") {
        handleCorrect(currentCard.id);
      } else if (e.code === "ArrowLeft" || e.code === "Digit2") {
        handleWrong(currentCard.id);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentCard, handleCorrect, handleWrong]);

  if (isLoading) {
    return (
      <Wrapper>
        <p>Carregando cards...</p>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorState onRetry={reloadData} />
      </Wrapper>
    );
  }

  if (!category) {
    return <NotFound />;
  }

  if (categoryCards.length === 0) {
    return (
      <Wrapper>
        <Title>{category?.name || "Categoria"}</Title>
        <EmptyState message="Nenhum card encontrado nesta categoria" />
        <ActionButton variant="primary" onClick={() => navigate("/")}>
          Voltar para Início
        </ActionButton>
      </Wrapper>
    );
  }

  if (!initialized) {
    return (
      <Wrapper>
        <p>Preparando sessão de estudo...</p>
      </Wrapper>
    );
  }

  if (queue.length === 0) {
    return (
      <Wrapper>
        <Title>{category?.name || "Categoria"}</Title>
        <CompletionBox>
          <h2>Sessão concluída!</h2>
          <p>Você revisou todos os cards desta categoria.</p>
          <CompletionStats>
            <StatCard title="Acertos" value={session.correct} color={tokens.colors.mint} icon={FaCheck} />
            <StatCard title="Erros" value={session.wrong} color={tokens.colors.coral} icon={FaTimes} />
          </CompletionStats>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <ActionButton variant="secondary" onClick={handleStudyAgain}>
              Estudar novamente
            </ActionButton>
            <ActionButton variant="primary" onClick={() => navigate("/")}>
              Voltar para Início
            </ActionButton>
          </div>
        </CompletionBox>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>{category?.name || "Categoria"}</Title>

      <Layout>
        <Panel>
          <CategoryBadge>{category?.name}</CategoryBadge>
          <CardArea>
            <InteractiveFlashcard
              card={currentCard}
              categoryColor={category?.color}
              progress={`${categoryStats.mastered}/${categoryStats.total} dominados`}
              onCorrect={handleCorrect}
              onWrong={handleWrong}
            />
          </CardArea>

          <Divider />

          <ShortcutsHint>
            <Tooltip text="Espaço ou Enter vira o card; seta direita ou 1 marca acerto; seta esquerda ou 2 marca erro">
              <span>
                <FaKeyboard aria-hidden="true" /> Atalhos de teclado disponíveis
              </span>
            </Tooltip>
          </ShortcutsHint>

          <ActionButton variant="ghost" onClick={() => navigate(`/cards/${categoryId}`)}>
            Ver todos os cards desta categoria
          </ActionButton>
        </Panel>

        <Panel style={{ textAlign: "left" }}>
          <StatsHeading>Estatísticas</StatsHeading>
          <StatsRow>
            <StatCard title="Restantes" value={queue.length} color={tokens.colors.periwinkle} icon={FaClock} />
            <StatCard title="Acertos" value={session.correct} color={tokens.colors.mint} icon={FaCheck} />
            <StatCard title="Erros" value={session.wrong} color={tokens.colors.coral} icon={FaTimes} />
          </StatsRow>
        </Panel>
      </Layout>
    </Wrapper>
  );
}

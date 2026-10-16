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

  const categoria = categories.find((c) => c.id === categoryId);
  const categoryCards = getCardsByCategory(categoryId);
  const categoryStats = getCategoryStats(categoryId);

  const [fila, setFila] = useState([]);
  const [inicializada, setInicializada] = useState(false);
  const [sessao, setSessao] = useState({ acertos: 0, erros: 0 });

  useEffect(() => {
    setFila([]);
    setInicializada(false);
    setSessao({ acertos: 0, erros: 0 });
  }, [categoryId]);

  useEffect(() => {
    if (!isLoading && !error && !inicializada) {
      setFila(categoryCards.map((card) => card.id));
      setInicializada(true);
    }
  }, [isLoading, error, inicializada, categoryCards]);

  const cardAtual = inicializada ? categoryCards.find((card) => card.id === fila[0]) : undefined;

  const handleAcertar = useCallback(
    (cardId) => {
      markCorrect(cardId);
      setSessao((s) => ({ ...s, acertos: s.acertos + 1 }));
      setFila((f) => f.slice(1));
    },
    [markCorrect]
  );

  const handleErrar = useCallback(
    (cardId) => {
      markWrong(cardId);
      setSessao((s) => ({ ...s, erros: s.erros + 1 }));
      setFila((f) => [...f.slice(1), cardId]);
    },
    [markWrong]
  );

  function handleEstudarNovamente() {
    setFila(categoryCards.map((card) => card.id));
    setSessao({ acertos: 0, erros: 0 });
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (!cardAtual) return;
      if (e.code === "ArrowRight" || e.code === "Digit1") {
        handleAcertar(cardAtual.id);
      } else if (e.code === "ArrowLeft" || e.code === "Digit2") {
        handleErrar(cardAtual.id);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cardAtual, handleAcertar, handleErrar]);

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
        <ErrorState onTentarNovamente={reloadData} />
      </Wrapper>
    );
  }

  if (!categoria) {
    return <NotFound />;
  }

  if (categoryCards.length === 0) {
    return (
      <Wrapper>
        <Title>{categoria?.name || "Categoria"}</Title>
        <EmptyState mensagem="Nenhum card encontrado nesta categoria" />
        <ActionButton variante="primary" onClick={() => navigate("/")}>
          Voltar para Início
        </ActionButton>
      </Wrapper>
    );
  }

  if (!inicializada) {
    return (
      <Wrapper>
        <p>Preparando sessão de estudo...</p>
      </Wrapper>
    );
  }

  if (fila.length === 0) {
    return (
      <Wrapper>
        <Title>{categoria?.name || "Categoria"}</Title>
        <CompletionBox>
          <h2>Sessão concluída!</h2>
          <p>Você revisou todos os cards desta categoria.</p>
          <CompletionStats>
            <StatCard titulo="Acertos" valor={sessao.acertos} cor={tokens.colors.mint} icone={FaCheck} />
            <StatCard titulo="Erros" valor={sessao.erros} cor={tokens.colors.coral} icone={FaTimes} />
          </CompletionStats>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <ActionButton variante="secondary" onClick={handleEstudarNovamente}>
              Estudar novamente
            </ActionButton>
            <ActionButton variante="primary" onClick={() => navigate("/")}>
              Voltar para Início
            </ActionButton>
          </div>
        </CompletionBox>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>{categoria?.name || "Categoria"}</Title>

      <Layout>
        <Panel>
          <CategoryBadge>{categoria?.name}</CategoryBadge>
          <CardArea>
            <InteractiveFlashcard
              card={cardAtual}
              corCategoria={categoria?.color}
              progresso={`${categoryStats.mastered}/${categoryStats.total} dominados`}
              onAcertar={handleAcertar}
              onErrar={handleErrar}
            />
          </CardArea>

          <Divider />

          <ShortcutsHint>
            <Tooltip texto="Espaço ou Enter vira o card; seta direita ou 1 marca acerto; seta esquerda ou 2 marca erro">
              <span>
                <FaKeyboard aria-hidden="true" /> Atalhos de teclado disponíveis
              </span>
            </Tooltip>
          </ShortcutsHint>

          <ActionButton variante="ghost" onClick={() => navigate(`/cards/${categoryId}`)}>
            Ver todos os cards desta categoria
          </ActionButton>
        </Panel>

        <Panel style={{ textAlign: "left" }}>
          <StatsHeading>Estatísticas</StatsHeading>
          <StatsRow>
            <StatCard titulo="Restantes" valor={fila.length} cor={tokens.colors.periwinkle} icone={FaClock} />
            <StatCard titulo="Acertos" valor={sessao.acertos} cor={tokens.colors.mint} icone={FaCheck} />
            <StatCard titulo="Erros" valor={sessao.erros} cor={tokens.colors.coral} icone={FaTimes} />
          </StatsRow>
        </Panel>
      </Layout>
    </Wrapper>
  );
}

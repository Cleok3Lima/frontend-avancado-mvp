import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaKeyboard, FaClock, FaCheck, FaTimes } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { FlashcardInterativo } from "../../components/FlashcardInterativo/FlashcardInterativo";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { NotFound } from "../NotFound/NotFound";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { tokens } from "../../styles/tokens";
import {
  Wrapper,
  Titulo,
  Layout,
  Painel,
  Divisor,
  CategoriaBadge,
  CardArea,
  StatsHeading,
  StatsRow,
  ConclusaoStats,
  AtalhosLegenda,
  ConclusaoBox,
} from "./StudyMode.styles";

export function StudyMode() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, getCardsByCategory, getCategoryStats, markCorrect, markWrong, isLoading, error } = useFlashcards();

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
    if (!isLoading && !inicializada) {
      setFila(categoryCards.map((card) => card.id));
      setInicializada(true);
    }
  }, [isLoading, inicializada, categoryCards]);

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

  if (!categoria && !error) {
    return <NotFound />;
  }

  if (categoryCards.length === 0) {
    return (
      <Wrapper>
        <Titulo>{categoria?.name || "Categoria"}</Titulo>
        <EmptyState mensagem="Nenhum card encontrado nesta categoria" />
        <BotaoAcao variante="primary" onClick={() => navigate("/")}>
          Voltar para Início
        </BotaoAcao>
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
        <Titulo>{categoria?.name || "Categoria"}</Titulo>
        <ConclusaoBox>
          <h2>Sessão concluída!</h2>
          <p>Você revisou todos os cards desta categoria.</p>
          <ConclusaoStats>
            <CardEstatistica titulo="Acertos" valor={sessao.acertos} cor={tokens.colors.mint} icone={FaCheck} />
            <CardEstatistica titulo="Erros" valor={sessao.erros} cor={tokens.colors.coral} icone={FaTimes} />
          </ConclusaoStats>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <BotaoAcao variante="secondary" onClick={handleEstudarNovamente}>
              Estudar novamente
            </BotaoAcao>
            <BotaoAcao variante="primary" onClick={() => navigate("/")}>
              Voltar para Início
            </BotaoAcao>
          </div>
        </ConclusaoBox>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Titulo>{categoria?.name || "Categoria"}</Titulo>

      <Layout>
        <Painel>
          <CategoriaBadge>{categoria?.name}</CategoriaBadge>
          <CardArea>
            <FlashcardInterativo
              card={cardAtual}
              corCategoria={categoria?.color}
              progresso={`${categoryStats.mastered}/${categoryStats.total} dominados`}
              onAcertar={handleAcertar}
              onErrar={handleErrar}
            />
          </CardArea>

          <Divisor />

          <AtalhosLegenda>
            <Tooltip texto="Espaço ou Enter vira o card; seta direita ou 1 marca acerto; seta esquerda ou 2 marca erro">
              <span>
                <FaKeyboard aria-hidden="true" /> Atalhos de teclado disponíveis
              </span>
            </Tooltip>
          </AtalhosLegenda>

          <BotaoAcao variante="ghost" onClick={() => navigate(`/cards/${categoryId}`)}>
            Ver todos os cards desta categoria
          </BotaoAcao>
        </Painel>

        <Painel style={{ textAlign: "left" }}>
          <StatsHeading>Estatísticas</StatsHeading>
          <StatsRow>
            <CardEstatistica titulo="Restantes" valor={fila.length} cor={tokens.colors.periwinkle} icone={FaClock} />
            <CardEstatistica titulo="Acertos" valor={sessao.acertos} cor={tokens.colors.mint} icone={FaCheck} />
            <CardEstatistica titulo="Erros" valor={sessao.erros} cor={tokens.colors.coral} icone={FaTimes} />
          </StatsRow>
        </Painel>
      </Layout>
    </Wrapper>
  );
}

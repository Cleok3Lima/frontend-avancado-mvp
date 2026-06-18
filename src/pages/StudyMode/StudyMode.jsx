import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaKeyboard } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { FlashcardInterativo } from "../../components/FlashcardInterativo/FlashcardInterativo";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import {
  Wrapper,
  Titulo,
  StatsRow,
  CardArea,
  AtalhosLegenda,
  ConclusaoBox,
} from "./StudyMode.styles";

export function StudyMode() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, getCardsByCategory, markCorrect, markWrong, isLoading } = useFlashcards();

  const categoria = categories.find((c) => c.id === categoryId);
  const categoryCards = getCardsByCategory(categoryId);

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

  const cartaAtual = inicializada ? categoryCards.find((card) => card.id === fila[0]) : undefined;

  function handleAcertar(cardId) {
    markCorrect(cardId);
    setSessao((s) => ({ ...s, acertos: s.acertos + 1 }));
    setFila((f) => f.slice(1));
  }

  function handleErrar(cardId) {
    markWrong(cardId);
    setSessao((s) => ({ ...s, erros: s.erros + 1 }));
    setFila((f) => [...f.slice(1), cardId]);
  }

  function handleEstudarNovamente() {
    setFila(categoryCards.map((card) => card.id));
    setSessao({ acertos: 0, erros: 0 });
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (!cartaAtual) return;
      if (e.code === "ArrowRight" || e.code === "Digit1") {
        handleAcertar(cartaAtual.id);
      } else if (e.code === "ArrowLeft" || e.code === "Digit2") {
        handleErrar(cartaAtual.id);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cartaAtual]);

  if (isLoading) {
    return (
      <Wrapper>
        <p>Carregando cards...</p>
      </Wrapper>
    );
  }

  if (categoryCards.length === 0) {
    return (
      <Wrapper>
        <Titulo>{categoria?.name || "Categoria"}</Titulo>
        <EmptyState mensagem="Nenhum cartão encontrado nesta categoria" />
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
          <StatsRow>
            <CardEstatistica titulo="Acertos" valor={sessao.acertos} cor="#16a34a" />
            <CardEstatistica titulo="Erros" valor={sessao.erros} cor="#dc2626" />
          </StatsRow>
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

      <StatsRow>
        <CardEstatistica titulo="Restantes" valor={fila.length} cor="#2563eb" />
        <CardEstatistica titulo="Acertos" valor={sessao.acertos} cor="#16a34a" />
        <CardEstatistica titulo="Erros" valor={sessao.erros} cor="#dc2626" />
      </StatsRow>

      <CardArea>
        <FlashcardInterativo
          card={cartaAtual}
          corCategoria={categoria?.color}
          onAcertar={handleAcertar}
          onErrar={handleErrar}
        />
      </CardArea>

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
    </Wrapper>
  );
}

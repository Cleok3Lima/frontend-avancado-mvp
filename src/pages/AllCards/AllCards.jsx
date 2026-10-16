import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch, FaListUl, FaCheckCircle } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { InteractiveFlashcard } from "../../components/InteractiveFlashcard/InteractiveFlashcard";
import { StatCard } from "../../components/StatCard/StatCard";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { ErrorState } from "../../components/ErrorState/ErrorState";
import { NotFound } from "../NotFound/NotFound";
import { tokens } from "../../styles/tokens";
import {
  Wrapper,
  Titulo,
  StatsRow,
  Filtros,
  CampoBusca,
  FiltroStatusRow,
  CardsGrid,
} from "./AllCards.styles";

const FILTROS_STATUS = [
  { id: "todos", label: "Todos" },
  { id: "new", label: "Novo" },
  { id: "in_progress", label: "Em progresso" },
  { id: "mastered", label: "Dominado" },
];

export function AllCards() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, getCardsByCategory, getCategoryStats, isLoading, error, reloadData } = useFlashcards();

  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("todos");

  const categoria = categories.find((c) => c.id === categoryId);
  const categoryCards = getCardsByCategory(categoryId);
  const stats = getCategoryStats(categoryId);

  const cardsFiltrados = categoryCards.filter((card) => {
    const correspondeBusca =
      card.question.toLowerCase().includes(busca.toLowerCase()) ||
      card.answer.toLowerCase().includes(busca.toLowerCase());
    const correspondeStatus = statusFiltro === "todos" || card.status === statusFiltro;
    return correspondeBusca && correspondeStatus;
  });

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
        <Titulo>{categoria?.name || "Categoria"}</Titulo>
        <EmptyState mensagem="Nenhum card encontrado nesta categoria" />
        <ActionButton variante="primary" onClick={() => navigate("/")}>
          Voltar para Início
        </ActionButton>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Titulo>{categoria?.name || "Categoria"}</Titulo>

      <StatsRow>
        <StatCard titulo="Total" valor={stats.total} cor={tokens.colors.periwinkle} icone={FaListUl} />
        <StatCard titulo="Dominados" valor={stats.mastered} cor={tokens.colors.mint} icone={FaCheckCircle} />
      </StatsRow>

      <Filtros>
        <CampoBusca>
          <FaSearch aria-hidden="true" />
          <input
            type="text"
            placeholder="Buscar por pergunta ou resposta..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </CampoBusca>
        <FiltroStatusRow>
          {FILTROS_STATUS.map((filtro) => (
            <ActionButton
              key={filtro.id}
              variante={statusFiltro === filtro.id ? "primary" : "secondary"}
              onClick={() => setStatusFiltro(filtro.id)}
            >
              {filtro.label}
            </ActionButton>
          ))}
        </FiltroStatusRow>
      </Filtros>

      {cardsFiltrados.length === 0 ? (
        <EmptyState mensagem="Nenhum card encontrado com esses filtros" />
      ) : (
        <CardsGrid>
          {cardsFiltrados.map((card) => (
            <InteractiveFlashcard key={card.id} card={card} corCategoria={categoria?.color} modoLeitura />
          ))}
        </CardsGrid>
      )}

      <ActionButton variante="ghost" onClick={() => navigate(`/study/${categoryId}`)}>
        Estudar esta categoria
      </ActionButton>
    </Wrapper>
  );
}

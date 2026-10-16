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
  Title,
  StatsRow,
  Filters,
  SearchField,
  StatusFilterRow,
  CardsGrid,
} from "./AllCards.styles";

const STATUS_FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "new", label: "Novo" },
  { id: "in_progress", label: "Em progresso" },
  { id: "mastered", label: "Dominado" },
];

export function AllCards() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, getCardsByCategory, getCategoryStats, isLoading, error, reloadData } = useFlashcards();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const category = categories.find((c) => c.id === categoryId);
  const categoryCards = getCardsByCategory(categoryId);
  const stats = getCategoryStats(categoryId);

  const filteredCards = categoryCards.filter((card) => {
    const matchesSearch =
      card.question.toLowerCase().includes(search.toLowerCase()) ||
      card.answer.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "todos" || card.status === statusFilter;
    return matchesSearch && matchesStatus;
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

  return (
    <Wrapper>
      <Title>{category?.name || "Categoria"}</Title>

      <StatsRow>
        <StatCard title="Total" value={stats.total} color={tokens.colors.periwinkle} icon={FaListUl} />
        <StatCard title="Dominados" value={stats.mastered} color={tokens.colors.mint} icon={FaCheckCircle} />
      </StatsRow>

      <Filters>
        <SearchField>
          <FaSearch aria-hidden="true" />
          <input
            type="text"
            placeholder="Buscar por pergunta ou resposta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchField>
        <StatusFilterRow>
          {STATUS_FILTERS.map((option) => (
            <ActionButton
              key={option.id}
              variant={statusFilter === option.id ? "primary" : "secondary"}
              onClick={() => setStatusFilter(option.id)}
            >
              {option.label}
            </ActionButton>
          ))}
        </StatusFilterRow>
      </Filters>

      {filteredCards.length === 0 ? (
        <EmptyState message="Nenhum card encontrado com esses filtros" />
      ) : (
        <CardsGrid>
          {filteredCards.map((card) => (
            <InteractiveFlashcard key={card.id} card={card} categoryColor={category?.color} readOnly />
          ))}
        </CardsGrid>
      )}

      <ActionButton variant="ghost" onClick={() => navigate(`/study/${categoryId}`)}>
        Estudar esta categoria
      </ActionButton>
    </Wrapper>
  );
}

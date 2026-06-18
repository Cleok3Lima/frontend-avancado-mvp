import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch, FaListUl, FaCheckCircle } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { FlashcardInterativo } from "../../components/FlashcardInterativo/FlashcardInterativo";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { EmptyState } from "../../components/EmptyState/EmptyState";
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
  const { categories, getCardsByCategory, getCategoryStats, isLoading } = useFlashcards();

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

  return (
    <Wrapper>
      <Titulo>{categoria?.name || "Categoria"}</Titulo>

      <StatsRow>
        <CardEstatistica titulo="Total" valor={stats.total} cor="#2563eb" icone={FaListUl} />
        <CardEstatistica titulo="Dominados" valor={stats.mastered} cor="#16a34a" icone={FaCheckCircle} />
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
            <BotaoAcao
              key={filtro.id}
              variante={statusFiltro === filtro.id ? "primary" : "secondary"}
              onClick={() => setStatusFiltro(filtro.id)}
            >
              {filtro.label}
            </BotaoAcao>
          ))}
        </FiltroStatusRow>
      </Filtros>

      {cardsFiltrados.length === 0 ? (
        <EmptyState mensagem="Nenhum cartão encontrado com esses filtros" />
      ) : (
        <CardsGrid>
          {cardsFiltrados.map((card) => (
            <FlashcardInterativo key={card.id} card={card} modoLeitura />
          ))}
        </CardsGrid>
      )}

      <BotaoAcao variante="ghost" onClick={() => navigate(`/study/${categoryId}`)}>
        Estudar esta categoria
      </BotaoAcao>
    </Wrapper>
  );
}

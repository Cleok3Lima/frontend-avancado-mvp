import { useState, useRef, useEffect } from "react";
import { FaListUl, FaCheckCircle, FaClock, FaRedo } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { StatCard } from "../../components/StatCard/StatCard";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { ErrorState } from "../../components/ErrorState/ErrorState";
import { tokens } from "../../styles/tokens";
import {
  Wrapper,
  Title,
  StatsRow,
  ResetRow,
  SuccessMessage,
  CategoriesGrid,
  LoadingMessage,
} from "./Home.styles";

export function Home() {
  const { categories, stats, isLoading, error, reloadData, resetProgress } = useFlashcards();
  const [modalAberto, setModalAberto] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const timerMensagemRef = useRef(null);

  useEffect(() => () => clearTimeout(timerMensagemRef.current), []);

  function handleConfirmarReset() {
    resetProgress();
    setModalAberto(false);
    setMensagemSucesso("Progresso reiniciado com sucesso!");
    clearTimeout(timerMensagemRef.current);
    timerMensagemRef.current = setTimeout(() => setMensagemSucesso(""), 3000);
  }

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingMessage>Carregando categorias...</LoadingMessage>
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

  return (
    <Wrapper>
      <Title>Bem-vindo ao CardMaster</Title>

      <StatsRow>
        <StatCard title="Total de cards" value={stats.total} color={tokens.colors.periwinkle} icon={FaListUl} />
        <StatCard
          title="Dominados"
          value={stats.mastered}
          color={tokens.colors.mint}
          icon={FaCheckCircle}
          hint="Cards que você já dominou"
        />
        <StatCard
          title="Em progresso"
          value={stats.inProgress}
          color={tokens.colors.sunshine}
          icon={FaClock}
          hint="Cards que você já errou pelo menos uma vez"
        />
      </StatsRow>

      <ResetRow>
        <Tooltip text="Apaga todo o progresso salvo e começa do zero">
          <ActionButton variant="danger" icon={FaRedo} onClick={() => setModalAberto(true)}>
            Reiniciar progresso
          </ActionButton>
        </Tooltip>
        {mensagemSucesso && <SuccessMessage>{mensagemSucesso}</SuccessMessage>}
      </ResetRow>

      <CategoriesGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </CategoriesGrid>

      <ConfirmModal
        isOpen={modalAberto}
        title="Reiniciar progresso"
        message="Isso vai apagar todo o seu progresso de estudo salvo. Essa ação não pode ser desfeita."
        onConfirm={handleConfirmarReset}
        onCancel={() => setModalAberto(false)}
      />
    </Wrapper>
  );
}

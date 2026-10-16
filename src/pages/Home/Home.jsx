import { useState, useRef, useEffect } from "react";
import { FaListUl, FaCheckCircle, FaClock, FaRedo } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { ErrorState } from "../../components/ErrorState/ErrorState";
import { tokens } from "../../styles/tokens";
import {
  Wrapper,
  Titulo,
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
        <ErrorState onTentarNovamente={reloadData} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Titulo>Bem-vindo ao CardMaster</Titulo>

      <StatsRow>
        <CardEstatistica titulo="Total de cards" valor={stats.total} cor={tokens.colors.periwinkle} icone={FaListUl} />
        <CardEstatistica
          titulo="Dominados"
          valor={stats.mastered}
          cor={tokens.colors.mint}
          icone={FaCheckCircle}
          dica="Cards que você já dominou"
        />
        <CardEstatistica
          titulo="Em progresso"
          valor={stats.inProgress}
          cor={tokens.colors.sunshine}
          icone={FaClock}
          dica="Cards que você já errou pelo menos uma vez"
        />
      </StatsRow>

      <ResetRow>
        <Tooltip texto="Apaga todo o progresso salvo e começa do zero">
          <BotaoAcao variante="danger" icone={FaRedo} onClick={() => setModalAberto(true)}>
            Reiniciar progresso
          </BotaoAcao>
        </Tooltip>
        {mensagemSucesso && <SuccessMessage>{mensagemSucesso}</SuccessMessage>}
      </ResetRow>

      <CategoriesGrid>
        {categories.map((categoria) => (
          <CategoryCard key={categoria.id} categoria={categoria} />
        ))}
      </CategoriesGrid>

      <ConfirmModal
        aberto={modalAberto}
        titulo="Reiniciar progresso"
        mensagem="Isso vai apagar todo o seu progresso de estudo salvo. Essa ação não pode ser desfeita."
        onConfirmar={handleConfirmarReset}
        onCancelar={() => setModalAberto(false)}
      />
    </Wrapper>
  );
}

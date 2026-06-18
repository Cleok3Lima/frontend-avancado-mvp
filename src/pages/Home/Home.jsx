import { useState } from "react";
import { FaListUl, FaCheckCircle, FaClock, FaRedo } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { CardEstatistica } from "../../components/CardEstatistica/CardEstatistica";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { BotaoAcao } from "../../components/BotaoAcao/BotaoAcao";
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import {
  Wrapper,
  Titulo,
  StatsRow,
  ResetRow,
  SuccessMessage,
  CategoriesGrid,
  LoadingMessage,
  ErrorBox,
} from "./Home.styles";

export function Home() {
  const { categories, stats, isLoading, error, reloadData, resetProgress } = useFlashcards();
  const [modalAberto, setModalAberto] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  function handleConfirmarReset() {
    resetProgress();
    setModalAberto(false);
    setMensagemSucesso("Progresso reiniciado com sucesso!");
    setTimeout(() => setMensagemSucesso(""), 3000);
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
        <ErrorBox>
          <p>Erro ao carregar os dados: {error}</p>
          <BotaoAcao variante="primary" onClick={reloadData}>
            Tentar novamente
          </BotaoAcao>
        </ErrorBox>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Titulo>Bem-vindo ao CardMaster</Titulo>

      <StatsRow>
        <CardEstatistica titulo="Total Cards" valor={stats.total} cor="#2563eb" icone={FaListUl} />
        <CardEstatistica
          titulo="Mastered"
          valor={stats.mastered}
          cor="#16a34a"
          icone={FaCheckCircle}
          dica="Cards que você já dominou"
        />
        <CardEstatistica
          titulo="In Progress"
          valor={stats.inProgress}
          cor="#f59e0b"
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

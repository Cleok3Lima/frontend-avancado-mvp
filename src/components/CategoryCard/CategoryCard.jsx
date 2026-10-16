import {
  FaReact,
  FaJs,
  FaSitemap,
  FaDatabase,
  FaHtml5,
  FaGitAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFlashcards } from "../../context/FlashcardsContext";
import { ActionButton } from "../ActionButton/ActionButton";
import { Card, IconWrapper, Nome, Stats, Acoes } from "./CategoryCard.styles";

const ICONES = { FaReact, FaJs, FaSitemap, FaDatabase, FaHtml5, FaGitAlt };

export function CategoryCard({ categoria }) {
  const { getCategoryStats } = useFlashcards();
  const navigate = useNavigate();
  const Icone = ICONES[categoria.icon] || FaQuestionCircle;
  const stats = getCategoryStats(categoria.id);

  return (
    <Card>
      <IconWrapper $cor={categoria.color}>
        <Icone aria-hidden="true" />
      </IconWrapper>
      <Nome>{categoria.name}</Nome>
      <Stats>
        {stats.mastered}/{stats.total} dominados
      </Stats>
      <Acoes>
        <ActionButton variante="primary" onClick={() => navigate(`/study/${categoria.id}`)}>
          Estudar
        </ActionButton>
        <ActionButton variante="ghost" onClick={() => navigate(`/cards/${categoria.id}`)}>
          Ver Cards
        </ActionButton>
      </Acoes>
    </Card>
  );
}

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
import { Card, IconWrapper, Name, Stats, Actions } from "./CategoryCard.styles";

const ICONS = { FaReact, FaJs, FaSitemap, FaDatabase, FaHtml5, FaGitAlt };

export function CategoryCard({ category }) {
  const { getCategoryStats } = useFlashcards();
  const navigate = useNavigate();
  const Icon = ICONS[category.icon] || FaQuestionCircle;
  const stats = getCategoryStats(category.id);

  return (
    <Card>
      <IconWrapper $color={category.color}>
        <Icon aria-hidden="true" />
      </IconWrapper>
      <Name>{category.name}</Name>
      <Stats>
        {stats.mastered}/{stats.total} dominados
      </Stats>
      <Actions>
        <ActionButton variant="primary" onClick={() => navigate(`/study/${category.id}`)}>
          Estudar
        </ActionButton>
        <ActionButton variant="ghost" onClick={() => navigate(`/cards/${category.id}`)}>
          Ver Cards
        </ActionButton>
      </Actions>
    </Card>
  );
}

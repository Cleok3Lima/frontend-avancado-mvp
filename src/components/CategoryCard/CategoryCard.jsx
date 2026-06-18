import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFlashcards } from "../../context/FlashcardsContext";
import { BotaoAcao } from "../BotaoAcao/BotaoAcao";
import { Card, IconWrapper, Nome, Stats, Acoes } from "./CategoryCard.styles";

export function CategoryCard({ categoria }) {
  const { getCategoryStats } = useFlashcards();
  const navigate = useNavigate();
  const Icone = FaIcons[categoria.icon] || FaIcons.FaQuestionCircle;
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
        <BotaoAcao variante="primary" onClick={() => navigate(`/study/${categoria.id}`)}>
          Estudar
        </BotaoAcao>
        <BotaoAcao variante="ghost" onClick={() => navigate(`/cards/${categoria.id}`)}>
          Ver Cards
        </BotaoAcao>
      </Acoes>
    </Card>
  );
}

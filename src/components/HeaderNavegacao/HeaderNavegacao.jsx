import { useLocation } from "react-router-dom";
import { useFlashcards } from "../../context/FlashcardsContext";
import { HeaderWrapper, Logo, Nav, NavLinkStyled } from "./HeaderNavegacao.styles";

export function HeaderNavegacao() {
  const location = useLocation();
  const { categories } = useFlashcards();
  const firstCategoryId = categories[0]?.id;

  const isHomeActive = location.pathname === "/";
  const isStudyActive = location.pathname.startsWith("/study");
  const isAllCardsActive = location.pathname.startsWith("/cards");

  return (
    <HeaderWrapper>
      <Logo>CardMaster</Logo>
      <Nav>
        <NavLinkStyled to="/" $active={isHomeActive}>
          Início
        </NavLinkStyled>
        <NavLinkStyled
          to={firstCategoryId ? `/study/${firstCategoryId}` : "#"}
          $active={isStudyActive}
          $disabled={!firstCategoryId}
        >
          Estudar
        </NavLinkStyled>
        <NavLinkStyled
          to={firstCategoryId ? `/cards/${firstCategoryId}` : "#"}
          $active={isAllCardsActive}
          $disabled={!firstCategoryId}
        >
          Todos os Cards
        </NavLinkStyled>
      </Nav>
    </HeaderWrapper>
  );
}

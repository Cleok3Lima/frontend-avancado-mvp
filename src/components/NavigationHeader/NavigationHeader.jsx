import { useLocation, matchPath } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { HeaderWrapper, LogoWrapper, LogoBadge, Logo, Nav, NavLinkStyled } from "./NavigationHeader.styles";

export function NavigationHeader() {
  const location = useLocation();
  const { categories } = useFlashcards();
  const routeCategoryId =
    matchPath("/study/:categoryId", location.pathname)?.params.categoryId ??
    matchPath("/cards/:categoryId", location.pathname)?.params.categoryId;
  const targetCategoryId = categories.some((c) => c.id === routeCategoryId) ? routeCategoryId : categories[0]?.id;

  const isHomeActive = location.pathname === "/";
  const isStudyActive = location.pathname.startsWith("/study");
  const isAllCardsActive = location.pathname.startsWith("/cards");

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoBadge>
          <FaLayerGroup aria-hidden="true" />
        </LogoBadge>
        <Logo>CardMaster</Logo>
      </LogoWrapper>
      <Nav>
        <NavLinkStyled to="/" $active={isHomeActive}>
          Início
        </NavLinkStyled>
        <NavLinkStyled
          to={targetCategoryId ? `/study/${targetCategoryId}` : "#"}
          $active={isStudyActive}
          $disabled={!targetCategoryId}
        >
          Estudar
        </NavLinkStyled>
        <NavLinkStyled
          to={targetCategoryId ? `/cards/${targetCategoryId}` : "#"}
          $active={isAllCardsActive}
          $disabled={!targetCategoryId}
        >
          Todos os Cards
        </NavLinkStyled>
      </Nav>
    </HeaderWrapper>
  );
}

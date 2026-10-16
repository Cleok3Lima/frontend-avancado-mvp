import { useLocation, matchPath } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa";
import { useFlashcards } from "../../context/FlashcardsContext";
import { HeaderWrapper, LogoWrapper, LogoBadge, Logo, Nav, NavLinkStyled } from "./NavigationHeader.styles";

export function NavigationHeader() {
  const location = useLocation();
  const { categories } = useFlashcards();
  const categoriaDaRota =
    matchPath("/study/:categoryId", location.pathname)?.params.categoryId ??
    matchPath("/cards/:categoryId", location.pathname)?.params.categoryId;
  const destinoId = categories.some((c) => c.id === categoriaDaRota) ? categoriaDaRota : categories[0]?.id;

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
          to={destinoId ? `/study/${destinoId}` : "#"}
          $active={isStudyActive}
          $disabled={!destinoId}
        >
          Estudar
        </NavLinkStyled>
        <NavLinkStyled
          to={destinoId ? `/cards/${destinoId}` : "#"}
          $active={isAllCardsActive}
          $disabled={!destinoId}
        >
          Todos os Cards
        </NavLinkStyled>
      </Nav>
    </HeaderWrapper>
  );
}

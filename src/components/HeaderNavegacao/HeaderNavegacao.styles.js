import styled from "styled-components";
import { Link } from "react-router-dom";
import { tokens } from "../../styles/tokens";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: ${tokens.colors.canvas};
  border-bottom: 3px solid ${tokens.colors.ink};
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const LogoBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${tokens.colors.sunshine};
  border: 2px solid ${tokens.colors.ink};
  color: ${tokens.colors.ink};
  font-size: 1.1rem;
`;

export const Logo = styled.span`
  font-family: ${tokens.fonts.display};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${tokens.colors.ink};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const NavLinkStyled = styled(Link)`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  text-decoration: none;
  color: ${tokens.colors.ink};
  background-color: ${(props) => (props.$active ? tokens.colors.sunshine : tokens.colors.surface)};
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};

  &:hover {
    filter: brightness(0.97);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #1f2937;
  color: #fff;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

export const NavLinkStyled = styled(Link)`
  color: ${(props) => (props.$active ? "#61dafb" : "#d1d5db")};
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  text-decoration: none;
  border-bottom: ${(props) => (props.$active ? "2px solid #61dafb" : "2px solid transparent")};
  padding-bottom: 0.25rem;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};

  &:hover {
    color: #61dafb;
  }
`;

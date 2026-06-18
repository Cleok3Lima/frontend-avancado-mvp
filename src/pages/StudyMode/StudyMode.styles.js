import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

export const Titulo = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 65% 1fr;
    align-items: start;
  }
`;

export const Painel = styled.div`
  background-color: ${tokens.colors.surface};
  border: 3px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hard};
  padding: 1.5rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

export const Divisor = styled.hr`
  border: none;
  border-top: 2px solid ${tokens.colors.ink};
  opacity: 0.15;
  margin: 1.25rem 0;
`;

export const CategoriaBadge = styled.span`
  display: inline-flex;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.3rem 0.85rem;
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  background-color: ${tokens.colors.surface};
  margin-bottom: 1rem;
`;

export const CardArea = styled.div`
  margin-bottom: 0.5rem;
`;

export const StatsHeading = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const StatsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 641px) and (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ConclusaoStats = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AtalhosLegenda = styled.div`
  color: ${tokens.colors.ink};
  opacity: 0.7;
  font-size: 0.85rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
`;

export const ConclusaoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

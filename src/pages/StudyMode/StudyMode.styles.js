import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${tokens.spacing.xl};

  @media (max-width: 640px) {
    padding: ${tokens.spacing.md};
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: ${tokens.spacing.md};
  text-align: center;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.xl};

  @media (min-width: 1024px) {
    grid-template-columns: 65% 1fr;
    align-items: start;
  }
`;

export const Panel = styled.div`
  background-color: ${tokens.colors.surface};
  border: 3px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.sm};
  box-shadow: ${tokens.shadow.hard};
  padding: ${tokens.spacing.xl};
  text-align: center;

  @media (max-width: 640px) {
    padding: ${tokens.spacing.md};
  }
`;

export const StatsPanel = styled(Panel)`
  text-align: left;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${tokens.colors.ink};
  opacity: 0.15;
  margin: ${tokens.spacing.lg} 0;
`;

export const CategoryBadge = styled.span`
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
  margin-bottom: ${tokens.spacing.xs};
`;

export const StatsHeading = styled.h2`
  font-size: 1.1rem;
  margin-bottom: ${tokens.spacing.md};
  text-align: left;
`;

export const StatsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};

  @media (min-width: 641px) and (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const CompletionStats = styled.div`
  display: flex;
  gap: ${tokens.spacing.sm};
  flex-wrap: wrap;
`;

export const ShortcutsHint = styled.div`
  color: ${tokens.colors.ink};
  opacity: 0.7;
  font-size: 0.85rem;
  margin: ${tokens.spacing.md} 0;
  display: flex;
  justify-content: center;
`;

export const CompletionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing.sm};
`;

export const CompletionActions = styled.div`
  display: flex;
  gap: ${tokens.spacing.sm};
  margin-top: ${tokens.spacing.md};
  flex-wrap: wrap;
`;

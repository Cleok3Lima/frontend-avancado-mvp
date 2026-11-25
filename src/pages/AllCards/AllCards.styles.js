import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${tokens.spacing.xl};

  @media (max-width: 640px) {
    padding: ${tokens.spacing.md};
  }
`;

export const Title = styled.h1`
  color: ${tokens.colors.ink};
  margin-bottom: ${tokens.spacing.md};
  text-align: center;
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${tokens.spacing.xl};
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
  margin-bottom: ${tokens.spacing.xl};
  align-items: center;
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.xs};
  border: 2px solid ${tokens.colors.ink};
  border-radius: ${tokens.radii.pill};
  background-color: ${tokens.colors.surface};
  padding: ${tokens.spacing.xs} 0.9rem;
  width: 100%;
  max-width: 420px;
  color: ${tokens.colors.ink};

  input {
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 0.95rem;
    color: ${tokens.colors.ink};
  }
`;

export const StatusFilterRow = styled.div`
  display: flex;
  gap: ${tokens.spacing.xs};
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${tokens.spacing.lg};
  margin-bottom: ${tokens.spacing.xxl};

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

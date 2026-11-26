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
  color: ${tokens.colors.ink};
  margin-bottom: ${tokens.spacing.xl};
`;

export const StatsRow = styled.div`
  display: flex;
  gap: ${tokens.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${tokens.spacing.xxl};
`;

export const ResetRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.md};
  margin-top: ${tokens.spacing.xxl};
  padding-top: ${tokens.spacing.xl};
  border-top: 2px solid rgba(26, 26, 26, 0.15);
  flex-wrap: wrap;
`;

export const SuccessMessage = styled.span`
  color: ${tokens.colors.ink};
  font-weight: 600;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${tokens.spacing.lg};
`;

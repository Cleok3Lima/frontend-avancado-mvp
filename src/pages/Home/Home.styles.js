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
  color: ${tokens.colors.ink};
  margin-bottom: 1.5rem;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

export const ResetRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const SuccessMessage = styled.span`
  color: ${tokens.colors.ink};
  font-weight: 600;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  color: ${tokens.colors.ink};
  opacity: 0.7;
  font-size: 1.1rem;
  padding: 3rem 0;
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  color: ${tokens.colors.coral};
  font-weight: 600;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Titulo = styled.h1`
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;

export const CampoBusca = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  max-width: 420px;
  color: #6b7280;

  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 0.95rem;
  }
`;

export const FiltroStatusRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

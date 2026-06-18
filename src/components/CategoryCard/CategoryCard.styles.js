import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.25rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${(props) => props.$cor || "#2563eb"};
`;

export const Nome = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  color: #1f2937;
`;

export const Stats = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
`;

export const Acoes = styled.div`
  display: flex;
  gap: 0.5rem;
`;

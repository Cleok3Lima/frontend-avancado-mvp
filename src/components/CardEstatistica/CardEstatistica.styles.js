import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.$cor || "#2563eb"};
  color: #fff;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  min-width: 160px;
  flex: 1 1 160px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
`;

export const IconWrapper = styled.div`
  font-size: 1.75rem;
  display: flex;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Valor = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Titulo = styled.span`
  font-size: 0.8rem;
  opacity: 0.9;
`;

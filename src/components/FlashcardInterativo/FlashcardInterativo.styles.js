import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${(props) => (props.$virado ? "#eff6ff" : "#fff")};
  border: 2px solid ${(props) => (props.$virado ? "#2563eb" : "#e5e7eb")};
  border-radius: 1rem;
  min-height: 180px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  text-align: center;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  @media (max-width: 480px) {
    min-height: 140px;
    padding: 1rem;
  }
`;

export const StatusBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  color: #fff;
  background-color: ${(props) =>
    props.$status === "mastered" ? "#16a34a" : props.$status === "in_progress" ? "#f59e0b" : "#6b7280"};
`;

export const Face = styled.p`
  font-size: 1.1rem;
  color: #1f2937;
  margin: 0;
`;

export const Acoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

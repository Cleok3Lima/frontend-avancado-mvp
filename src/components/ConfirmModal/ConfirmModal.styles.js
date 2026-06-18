import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 360px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: #dc2626;
`;

export const Titulo = styled.h2`
  margin: 0;
  font-size: 1.1rem;
`;

export const Mensagem = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.9rem;
`;

export const Acoes = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

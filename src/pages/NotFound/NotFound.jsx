import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { Wrapper, IconWrapper, Title, Message } from "./NotFound.styles";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <IconWrapper>
        <FaExclamationTriangle aria-hidden="true" />
      </IconWrapper>
      <Title>404 - Página não encontrada</Title>
      <Message>A página que você procura não existe ou foi movida.</Message>
      <ActionButton variante="primary" onClick={() => navigate("/")}>
        Voltar para Início
      </ActionButton>
    </Wrapper>
  );
}

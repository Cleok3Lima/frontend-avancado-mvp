import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { Wrapper, IconWrapper, Titulo, Mensagem } from "./NotFound.styles";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <IconWrapper>
        <FaExclamationTriangle aria-hidden="true" />
      </IconWrapper>
      <Titulo>404 - Página não encontrada</Titulo>
      <Mensagem>A página que você procura não existe ou foi movida.</Mensagem>
      <ActionButton variante="primary" onClick={() => navigate("/")}>
        Voltar para Início
      </ActionButton>
    </Wrapper>
  );
}

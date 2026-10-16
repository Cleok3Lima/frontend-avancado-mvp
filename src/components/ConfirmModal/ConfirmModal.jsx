import { FaExclamationTriangle } from "react-icons/fa";
import { ActionButton } from "../ActionButton/ActionButton";
import { Overlay, ModalBox, IconWrapper, Title, Message, Actions } from "./ConfirmModal.styles";

export function ConfirmModal({ aberto, titulo, mensagem, onConfirmar, onCancelar }) {
  if (!aberto) return null;

  return (
    <Overlay onClick={onCancelar}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <IconWrapper>
          <FaExclamationTriangle aria-hidden="true" />
        </IconWrapper>
        <Title>{titulo}</Title>
        <Message>{mensagem}</Message>
        <Actions>
          <ActionButton variante="secondary" onClick={onCancelar}>
            Cancelar
          </ActionButton>
          <ActionButton variante="danger" onClick={onConfirmar}>
            Confirmar
          </ActionButton>
        </Actions>
      </ModalBox>
    </Overlay>
  );
}

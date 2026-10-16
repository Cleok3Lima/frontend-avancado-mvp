import { FaExclamationTriangle } from "react-icons/fa";
import { ActionButton } from "../ActionButton/ActionButton";
import { Overlay, ModalBox, IconWrapper, Title, Message, Actions } from "./ConfirmModal.styles";

export function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onCancel}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <IconWrapper>
          <FaExclamationTriangle aria-hidden="true" />
        </IconWrapper>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Actions>
          <ActionButton variant="secondary" onClick={onCancel}>
            Cancelar
          </ActionButton>
          <ActionButton variant="danger" onClick={onConfirm}>
            Confirmar
          </ActionButton>
        </Actions>
      </ModalBox>
    </Overlay>
  );
}

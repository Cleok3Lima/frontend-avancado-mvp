import { FaExclamationTriangle } from "react-icons/fa";
import { BotaoAcao } from "../BotaoAcao/BotaoAcao";
import { Overlay, ModalBox, IconWrapper, Titulo, Mensagem, Acoes } from "./ConfirmModal.styles";

export function ConfirmModal({ aberto, titulo, mensagem, onConfirmar, onCancelar }) {
  if (!aberto) return null;

  return (
    <Overlay onClick={onCancelar}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <IconWrapper>
          <FaExclamationTriangle aria-hidden="true" />
        </IconWrapper>
        <Titulo>{titulo}</Titulo>
        <Mensagem>{mensagem}</Mensagem>
        <Acoes>
          <BotaoAcao variante="secondary" onClick={onCancelar}>
            Cancelar
          </BotaoAcao>
          <BotaoAcao variante="danger" onClick={onConfirmar}>
            Confirmar
          </BotaoAcao>
        </Acoes>
      </ModalBox>
    </Overlay>
  );
}

import { Wrapper, Spinner, Message } from "./LoadingSpinner.styles";

export function LoadingSpinner({ message = "Carregando..." }) {
  return (
    <Wrapper role="status" aria-live="polite">
      <Spinner aria-hidden="true" />
      <Message>{message}</Message>
    </Wrapper>
  );
}

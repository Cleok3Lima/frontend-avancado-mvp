import { useParams } from "react-router-dom";
import { FlashcardInterativo } from "../../components/FlashcardInterativo/FlashcardInterativo";

const cardExemplo = {
  id: "demo-1",
  question: "Pergunta de teste?",
  answer: "Resposta de teste!",
  status: "new",
};

export function StudyMode() {
  const { categoryId } = useParams();
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Study Mode — categoria: {categoryId}</h1>
      <FlashcardInterativo
        card={cardExemplo}
        onAcertar={(id) => console.log("acertou", id)}
        onErrar={(id) => console.log("errou", id)}
      />
      <h2>Modo leitura:</h2>
      <FlashcardInterativo card={{ ...cardExemplo, status: "mastered" }} modoLeitura />
    </div>
  );
}

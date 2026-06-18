import { useParams } from "react-router-dom";

export function StudyMode() {
  const { categoryId } = useParams();
  return <h1>Study Mode — categoria: {categoryId}</h1>;
}

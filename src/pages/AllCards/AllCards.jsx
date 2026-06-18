import { useParams } from "react-router-dom";

export function AllCards() {
  const { categoryId } = useParams();
  return <h1>All Cards — categoria: {categoryId}</h1>;
}

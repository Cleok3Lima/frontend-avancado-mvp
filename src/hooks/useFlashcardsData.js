import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

const DATA_URL = "/data/flashcards.json";
const PROGRESS_KEY = "cardmaster:progress";
const SIMULATED_DELAY_MS = 600;

export function useFlashcardsData() {
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress, clearProgress] = useLocalStorage(PROGRESS_KEY, {});

  const loadData = useCallback(() => {
    setIsLoading(true);
    setError(null);
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Falha ao carregar dados (status ${response.status})`);
        }
        return response.json();
      })
      .then(
        (data) =>
          new Promise((resolve) => {
            setTimeout(() => resolve(data), SIMULATED_DELAY_MS);
          })
      )
      .then((data) => {
        setCategories(data.categories);
        setCards(data.cards);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const cardsWithStatus = useMemo(
    () => cards.map((card) => ({ ...card, status: progress[card.id] || "new" })),
    [cards, progress]
  );

  const computeStats = useCallback((cardList) => {
    const total = cardList.length;
    const mastered = cardList.filter((c) => c.status === "mastered").length;
    const inProgress = cardList.filter((c) => c.status === "in_progress").length;
    return { total, mastered, inProgress };
  }, []);

  const stats = useMemo(() => computeStats(cardsWithStatus), [cardsWithStatus, computeStats]);

  const markCorrect = useCallback(
    (cardId) => setProgress((prev) => ({ ...prev, [cardId]: "mastered" })),
    [setProgress]
  );

  const markWrong = useCallback(
    (cardId) => setProgress((prev) => ({ ...prev, [cardId]: "in_progress" })),
    [setProgress]
  );

  const resetProgress = useCallback(() => clearProgress(), [clearProgress]);

  const getCardsByCategory = useCallback(
    (categoryId) => cardsWithStatus.filter((c) => c.categoryId === categoryId),
    [cardsWithStatus]
  );

  const getCategoryStats = useCallback(
    (categoryId) => computeStats(getCardsByCategory(categoryId)),
    [getCardsByCategory, computeStats]
  );

  return {
    categories,
    cards: cardsWithStatus,
    stats,
    isLoading,
    error,
    reloadData: loadData,
    markCorrect,
    markWrong,
    resetProgress,
    getCardsByCategory,
    getCategoryStats,
  };
}

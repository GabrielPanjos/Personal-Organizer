import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // variável que armazena os cards (categorias)
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  function deleteCard(cardId) {
    const cardToDelete = cards.find((card) => card.id === cardId);

    if (cardToDelete.isDeleted) {
      // Segunda vez → remove do array
      setCards(cards.filter((card) => card.id !== cardId));
    } else {
      // Primeira vez → marca como deletado
      setCards(
        cards.map((card) =>
          card.id === cardId ? { ...card, isDeleted: true } : card
        )
      );
    }
  }

  function editCard(title, description, cardId) {
    if (title === "") return;

    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          title,
          description,
        };
      }
      return card;
    });
    setCards(newCards);

    return;
  }

  function createCard(title, description) {
    if (title === "") {
      return;
    }

    const newCard = { title, description, id: Date.now(), isDeleted: false };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardContext.Provider value={{ cards, createCard, deleteCard, editCard }}>
      {children}
    </CardContext.Provider>
  );
};

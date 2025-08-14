import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // variável que armazena os cards (categorias)
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  const [deletedCards, setDeletedCards] = useState(
    JSON.parse(localStorage.getItem("deletedCards")) || []
  );

  function deleteCard(cardId) {
    const newCards = cards.filter((card) => card.id !== cardId);
    const newDeletedCard = cards.filter((card) => card.id === cardId);

    setDeletedCards([...deletedCards, newDeletedCard]);
    setCards(newCards);
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

    const newCard = { title, description, id: Date.now() };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("deletedCards", JSON.stringify(deletedCards));
  }, [deletedCards]);

  return (
    <CardContext.Provider value={{ cards, createCard, deleteCard, editCard }}>
      {children}
    </CardContext.Provider>
  );
};

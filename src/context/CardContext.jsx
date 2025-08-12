import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // variável que armazena os cards (categorias)
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  function deleteCard(cardId) {
    const newCards = cards.filter((card) => card.id !== cardId);
    setCards(newCards);
  }

  function editCard(title, description, cardId) {
    console.log('foi')
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

  return (
    <CardContext.Provider value={{ cards, createCard, deleteCard, editCard }}>
      {children}
    </CardContext.Provider>
  );
};

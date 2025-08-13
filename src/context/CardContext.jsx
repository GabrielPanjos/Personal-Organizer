import { createContext, useContext, useEffect, useState } from "react";
import { ModalDialogContext } from "./ModalDialogContext";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const { confirmDialog } = useContext(ModalDialogContext);

  // variável que armazena os cards (categorias)
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  function deleteCard(cardId) {
    if (confirmDialog) {
      const newCards = cards.filter((card) => card.id !== cardId);
      setCards(newCards);
    }
  }

  function editCard(title, description, cardId) {
    if (title === "") return;
    if (confirmDialog) {
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

    return;
  }

  function createCard(title, description) {
    if (title === "") {
      return;
    }
    if (confirmDialog) {
      const newCard = { title, description, id: Date.now() };
      setCards([...cards, newCard]);
    }
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

import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // variável que armazena os cards (categorias)
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  function criarCard(title, description) {
    const newCard = { title, description };

    setCards([...cards, newCard]);
  }

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardContext.Provider value={{ cards, criarCard }}>
      {children}
    </CardContext.Provider>
  );
};

import { createContext, useState } from "react";

export const MoreSettingsContext = createContext();

export const MoreSettingsProvider = ({ children }) => {
  const [activeCardId, setActiveCardId] = useState(false);

  function toggleMoreSettingsBar(cardId) {
    const newActiveCardId = !activeCardId;
    setActiveCardId(newActiveCardId);
  }

  return (
    <MoreSettingsContext.Provider
      value={{
        activeCardId,
        toggleMoreSettingsBar,
      }}
    >
      {children}
    </MoreSettingsContext.Provider>
  );
};

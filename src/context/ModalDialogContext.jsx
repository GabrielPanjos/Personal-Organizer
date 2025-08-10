import { createContext, useState } from "react";

export const ModalDialogContext = createContext();

export const ModalDialogProvider = ({ children }) => {
  const [viewCreateCardBar, setViewCreateCardBar] = useState(false);

  function viewCreateCardBarOnClick() {
    const newViewCreateCardBar = !viewCreateCardBar;

    setViewCreateCardBar(newViewCreateCardBar);
  }

  return (
    <ModalDialogContext.Provider
      value={{ viewCreateCardBar, viewCreateCardBarOnClick }}
    >
      {children}
    </ModalDialogContext.Provider>
  );
};

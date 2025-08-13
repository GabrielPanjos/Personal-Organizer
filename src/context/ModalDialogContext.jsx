import { createContext, useState } from "react";

export const ModalDialogContext = createContext();

export const ModalDialogProvider = ({ children }) => {
  const [viewCreateCardBar, setViewCreateCardBar] = useState(false);
  const [viewEditCardBar, setViewEditCardBar] = useState(false);

  function viewCreateCardBarOnClick() {
    const newViewCreateCardBar = !viewCreateCardBar;

    setViewCreateCardBar(newViewCreateCardBar);
  }

  function viewEditCardBarOnClick() {
    const newViewEditCardBar = !viewEditCardBar;

    setViewEditCardBar(newViewEditCardBar);
  }

  return (
    <ModalDialogContext.Provider
      value={{
        viewCreateCardBar,
        viewCreateCardBarOnClick,
        viewEditCardBar,
        viewEditCardBarOnClick,
        setViewCreateCardBar,
        setViewEditCardBar,
      }}
    >
      {children}
    </ModalDialogContext.Provider>
  );
};

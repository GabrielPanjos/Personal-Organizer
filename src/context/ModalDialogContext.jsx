import { createContext, useState } from "react";

export const ModalDialogContext = createContext();

export const ModalDialogProvider = ({ children }) => {
  const [viewCreateCardBar, setViewCreateCardBar] = useState(false);
  const [viewEditCardBar, setViewEditCardBar] = useState(false);
  const [viewConfirmDialog, setViewConfirmDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);

  function confirmDialogProps(...props) {
    return props;
  }

  function viewConfirmDialogOnClick() {
    const newViewConfirmDialog = !viewConfirmDialog;

    setViewConfirmDialog(newViewConfirmDialog);
  }

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
        viewConfirmDialog,
        setViewConfirmDialog,
        setConfirmDialog,
        confirmDialog,
        viewConfirmDialogOnClick,
        confirmDialogProps,
      }}
    >
      {children}
    </ModalDialogContext.Provider>
  );
};

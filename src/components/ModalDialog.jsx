import { ModalDialogContext } from "../context/ModalDialogContext";
import { useContext } from "react";

function ModalDialog() {
  const { setViewCreateCardBar, setViewEditCardBar, viewConfirmDialogOnClick } =
    useContext(ModalDialogContext);

  return (
    <div
      onClick={() => {
        setViewCreateCardBar(false),
          setViewEditCardBar(false),
          viewConfirmDialogOnClick(false);
      }}
      className="bg-[#00000080] h-full w-full absolute"
    ></div>
  );
}

export default ModalDialog;

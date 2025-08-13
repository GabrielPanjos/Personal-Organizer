import { ModalDialogContext } from "../context/ModalDialogContext";
import { useContext } from "react";

function ModalDialog() {
  const { setViewCreateCardBar, setViewEditCardBar, setViewConfirmDialog } =
    useContext(ModalDialogContext);

  return (
    <div
      onClick={() => {
        setViewCreateCardBar(false),
          setViewEditCardBar(false),
          setViewConfirmDialog(false);
      }}
      className="bg-[#00000080] h-full w-full fixed"
    ></div>
  );
}

export default ModalDialog;

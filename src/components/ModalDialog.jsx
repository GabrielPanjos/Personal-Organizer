import { ModalDialogContext } from "../context/ModalDialogContext";
import { useContext } from "react";

function ModalDialog() {
  const { viewCreateCardBarOnClick } = useContext(ModalDialogContext);

  return (
    <div
      onClick={() => viewCreateCardBarOnClick()}
      className="bg-[#00000080] h-full w-full absolute"
    ></div>
  );
}

export default ModalDialog;

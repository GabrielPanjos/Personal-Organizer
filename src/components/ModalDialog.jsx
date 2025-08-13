import { ModalDialogContext } from "../context/ModalDialogContext";
import { useContext } from "react";

function ModalDialog() {
  const { setViewCreateCardBar, setViewEditCardBar } =
    useContext(ModalDialogContext);

  return (
    <div
      onClick={() => {
        setViewCreateCardBar(false), setViewEditCardBar(false);
      }}
      className="bg-[#00000080] h-full w-full absolute"
    ></div>
  );
}

export default ModalDialog;

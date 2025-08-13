import { useContext } from "react";
import { ModalDialogContext } from "../context/ModalDialogContext";

function ConfirmDialog() {
  const { setViewConfirmDialog } = useContext(ModalDialogContext);

  return (
    <div className="flex justify-center absolute items-center">
      <div className="flex flex-col items-center w-[350px] h-[320px] rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]"></div>
    </div>
  );
}

export default ConfirmDialog;

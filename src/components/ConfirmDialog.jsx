import Button from "./Button";
import { ModalDialogContext } from "../context/ModalDialogContext";
import { useContext } from "react";

function ConfirmDialog({ message, onConfirm, onCancel }) {
  const { setViewConfirmDialog } = useContext(ModalDialogContext);

  return (
    <div className="flex justify-center absolute items-center">
      <div
        onClick={() => setViewConfirmDialog(false)}
        className="bg-[#00000080] h-full w-full fixed"
      ></div>
      <div className=" flex justify-center absolute items-center">
        <div className="flex flex-col items-center w-[400px] rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
          <span className="font-medium mt-5">{message}</span>
          <div className="flex gap-12 mt-10 mb-10">
            <Button onClick={onCancel} bg="bg-red-500">
              Cancelar
            </Button>
            <Button onClick={onConfirm} bg="bg-[#6C5CE7]">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;

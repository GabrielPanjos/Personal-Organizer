import { Ellipsis } from "lucide-react";
import { useState, useContext } from "react";
import MoreSettingsBar from "./MoreSettingsBar";
import SettingsButton from "./SettingsButton";
import { Trash, Pencil } from "lucide-react";
import { CardContext } from "../context/CardContext";
import { ModalDialogContext } from "../context/ModalDialogContext";
import EditCardBar from "./EditCardBar";
import ModalDialog from "./ModalDialog";

function Card({ title, description, cardId }) {
  const [more, setMore] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const { deleteCard } = useContext(CardContext);
  const { viewEditCardBar, viewEditCardBarOnClick } =
    useContext(ModalDialogContext);

  function handleShowMenu(e) {
    // Pega a posição do clique
    setMenuPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function toggleMoreSettingsBar() {
    const newActiveCardId = !isMenuOpen;
    setIsMenuOpen(newActiveCardId);
  }

  return (
    <>
      <li
        onMouseEnter={() => setMore(true)}
        onMouseLeave={() => setMore(false)}
        className="flex items-center absolute text-[14px] w-[300px] h-[200px] mt-12 rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]"
      >
        <div className="w-full h-full">
          <div className="flex flex-row justify-between w-full h-[40%] pt-4 pl-4 pr-4">
            <div>
              <h1 className="font-medium">{title}</h1>
              <p className="text-[12px]">{description}</p>
            </div>
            <div>
              {more && (
                <button
                  onClick={(e) => {
                    toggleMoreSettingsBar();
                    handleShowMenu(e);
                  }}
                >
                  <Ellipsis className="size-5" />
                </button>
              )}
            </div>
          </div>
          <div className="w-full h-[60%]"></div>
        </div>
      </li>
      {viewEditCardBar && (
        <div className="flex justify-center items-center h-full w-full inset-0 fixed">
          <ModalDialog />
          <EditCardBar
            title={title}
            description={description}
            cardId={cardId}
          ></EditCardBar>
        </div>
      )}
      {isMenuOpen && (
        <MoreSettingsBar
          style={{
            position: "fixed",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            zIndex: 9999,
          }}
        >
          <SettingsButton
            onClick={() => viewEditCardBarOnClick(title, description, cardId)}
            Icon={Pencil}
          >
            Editar
          </SettingsButton>
          <SettingsButton onClick={() => deleteCard(cardId)} Icon={Trash}>
            Apagar
          </SettingsButton>
        </MoreSettingsBar>
      )}
    </>
  );
}

export default Card;

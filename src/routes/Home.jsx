import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AddCardButton from "../components/AddCardButton";
import CreateCardBar from "../components/CreateCardBar";
import { CardContext } from "../context/CardContext";
import Card from "../components/Card";
import { ModalDialogContext } from "../context/ModalDialogContext";
import ModalDialog from "../components/ModalDialog";

function Home() {
  const { cards } = useContext(CardContext);
  const { viewCreateCardBar, viewCreateCardBarOnClick } =
    useContext(ModalDialogContext);

  const [cardsFiltered, setCardsFiltered] = useState(cards);

  function filterCards(search) {
    if (search.length === 0) {
      setCardsFiltered(cards);
    }

    setCardsFiltered(
      cards.filter(
        (card) =>
          card.title.toLowerCase().includes(search) ||
          card.description.toLowerCase().includes(search)
      )
    );
  }

  useEffect(() => {
    setCardsFiltered(cards);
  }, [cards]);

  return (
    <div className="flex gap-12 h-screen w-screen bg-[#F9FAFB] dark:bg-[#121212] text-[#2D3436] dark:text-[#ECEFF1] ">
      <Sidebar filterCards={filterCards} />
      <div className="flex flex-col h-full">
        <div className="flex h-[200px]">
          <AddCardButton viewCreateCardBarOnClick={viewCreateCardBarOnClick} />
        </div>
        <div className="h-full w-full">
          {cards && (
            <ul>
              {cardsFiltered
                .filter((card) => !card.isDeleted)
                .map((card) => (
                  <Card
                    cardId={card.id}
                    key={card.id}
                    title={card.title}
                    description={card.description}
                  />
                ))}
            </ul>
          )}
        </div>
      </div>
      {viewCreateCardBar && (
        <div className="flex justify-center items-center h-full w-full absolute">
          <ModalDialog />
          <CreateCardBar />
        </div>
      )}
    </div>
  );
}

export default Home;

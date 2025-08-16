import { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { CardContext } from "../context/CardContext";
import Card from "../components/Card";

function Trash() {
  const { cards } = useContext(CardContext);

  const [cardsFiltered, setCardsFiltered] = useState(cards);

  function filterCards(search) {
    if (search.length === 0) {
      setCardsFiltered(cards);
    }

    setCardsFiltered(
      cards.filter(
        (card) =>
          card.title.toLowerCase().includes(search.toLowerCase()) ||
          card.description.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  return (
    <div className="flex gap-12 h-screen w-screen bg-[#F9FAFB] dark:bg-[#121212] text-[#2D3436] dark:text-[#ECEFF1] ">
      <Sidebar filterCards={filterCards} />
      <div className="flex flex-col h-full">
        <div className="flex h-[200px]"></div>
        <div className="h-full w-full"></div>
      </div>
      {cards && (
        <ul>
          {cardsFiltered
            .filter((card) => card.isDeleted)
            .map((card) => (
              <Card
                isDeleted={card.isDeleted}
                cardId={card.id}
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default Trash;

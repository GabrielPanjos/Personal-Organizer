import React, { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import AddCardButton from "../components/AddCardButton";
import SidebarButton from "../components/SidebarButton";
import { Clock, Trash2, House, ClipboardList } from "lucide-react";
import SearchInput from "../components/SearchInput";
import CreateCardBar from "../components/CreateCardBar";
import { CardContext } from "../context/CardContext";
import Card from "../components/Card";

function Home() {
  const { cards } = useContext(CardContext);

  const [viewCreateCardBar, setViewCreateCardBar] = useState(false);

  function viewCreateCardBarOnClick() {
    const newViewCreateCardBar = !viewCreateCardBar;

    setViewCreateCardBar(newViewCreateCardBar);
  }

  return (
    <div className="flex gap-12 h-screen w-screen bg-[#F9FAFB] dark:bg-[#121212] text-[#2D3436] dark:text-[#ECEFF1] ">
      <Sidebar>
        <div className="flex flex-col items-center w-full bg-[#FFFFFF] dark:bg-[#1E1E1E] border-b-2 border-[#DDE3E8] dark:border-[#2E2E2E] ">
          <SearchInput />
          <SidebarButton route="/recents" Icon={Clock}>
            Recentes
          </SidebarButton>
        </div>
        <SidebarButton route="/" Icon={House}>
          Inicio
        </SidebarButton>
        <SidebarButton route="/tasks" Icon={ClipboardList}>
          Tarefas
        </SidebarButton>
        <SidebarButton route="/trash" Icon={Trash2}>
          Lixeira
        </SidebarButton>
      </Sidebar>
      <div className="flex flex-col">
        <div className="flex gap-12">
          <AddCardButton viewCreateCardBarOnClick={viewCreateCardBarOnClick} />
          {viewCreateCardBar && <CreateCardBar />}
        </div>
        <div>
          {cards && (
            <ul>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

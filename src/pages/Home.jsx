import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AddCardButton from "../components/AddCardButton";
import SidebarButton from "../components/SidebarButton";

import Clock from "lucide-react/dist/esm/icons/clock.js";
import Trash2 from "lucide-react/dist/esm/icons/trash-2.js";
import House from "lucide-react/dist/esm/icons/home.js";

import SearchInput from "../components/SearchInput";
import CreateCardBar from "../components/CreateCardBar";

function Home() {
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
          <SidebarButton Icon={Clock}>Recentes</SidebarButton>
        </div>
        <SidebarButton route="/" Icon={House}>
          Inicio
        </SidebarButton>
        <SidebarButton Icon={Trash2}>Lixeira</SidebarButton>
      </Sidebar>
      <div className="flex  gap-12">
        <AddCardButton viewCreateCardBarOnClick={viewCreateCardBarOnClick} />
        {viewCreateCardBar && <CreateCardBar />}
      </div>
    </div>
  );
}

export default Home;

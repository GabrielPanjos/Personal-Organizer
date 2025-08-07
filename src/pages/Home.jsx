import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import SidebarButton from "../components/SidebarButton";
import { Clock } from "lucide-react";
import SearchInput from "../components/SearchInput";

function Home() {
  return (
    <div className="flex gap-12 h-screen w-screen bg-[#F9FAFB] dark:bg-[#121212] text-[#2D3436] dark:text-[#ECEFF1] ">
      <Sidebar>
        <div className="flex flex-col items-center w-full h-[200px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border-b-2 border-[#DDE3E8] dark:border-[#2E2E2E] ">
          <SearchInput />
          <SidebarButton Icon={Clock}>Recentes</SidebarButton>
        </div>
      </Sidebar>
      <Button />
    </div>
  );
}

export default Home;

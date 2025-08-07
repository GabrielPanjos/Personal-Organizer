import React from "react";
import SideBar from "../components/SideBar";
import Button from "../components/Button";
import { Search } from "lucide-react";

function Home() {
  return (
    <div className="flex gap-12 h-screen w-screen bg-[#F9FAFB] dark:bg-[#121212] text-[#2D3436] dark:text-[#ECEFF1] ">
      <SideBar>
        <div className="flex justify-around w-full h-[200px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border-b-2 border-[#DDE3E8] dark:border-[#2E2E2E] ">
          <div className="relative">
            <Search className="absolute left-2 top-9.5 transform -translate-y-1/2 w-4 h-4" />
            <input
              className="flex items-center pl-8 mt-5 w-[200px] text-[14px] h-[35px] bg-[#2E2E2E] rounded"
              placeholder="procurar pelo nome..."
            ></input>
          </div>
        </div>
      </SideBar>
      <Button />
    </div>
  );
}

export default Home;

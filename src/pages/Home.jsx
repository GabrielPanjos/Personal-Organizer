import React from "react";
import SideBar from "../components/SideBar";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex gap-12 h-screen w-screen bg-[#F9FAFB] dark:bg-[#121212] text-[#2D3436] dark:text-[#ECEFF1] ">
      <SideBar>
        <div className=" w-full h-[200px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border-b-2 border-[#DDE3E8] dark:border-[#2E2E2E] "></div>
      </SideBar>
      <Button />
    </div>
  );
}

export default Home;

import { useNavigate } from "react-router-dom";

function SidebarButton({ Icon, children, route }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center font-medium w-full mb-3 mt-3 h-[40px] bg-[#FFFFFF] dark:bg-[#1E1E1E] hover:bg-[#DDE3E8] dark:hover:dark:bg-[#2E2E2E]">
      <button
        onClick={() => navigate(route)}
        className="flex items-center pr-2 pl-2 w-[240px] h-[40px]"
      >
        <Icon className="w-4 h-4" />
        <span className="text-[14px] ml-3 ">{children}</span>
      </button>
    </div>
  );
}

export default SidebarButton;

import { Clock, Trash2, House, ClipboardList } from "lucide-react";
import SidebarButton from "../components/SidebarButton";
import SearchInput from "../components/SearchInput";

function Sidebar({ filterCards }) {
  return (
    <nav className="h-full w-[280px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      <ul>
        <div className="flex flex-col items-center w-full bg-[#FFFFFF] dark:bg-[#1E1E1E] border-b-2 border-[#DDE3E8] dark:border-[#2E2E2E] ">
          <SearchInput filterCards={filterCards} />
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
      </ul>
    </nav>
  );
}

export default Sidebar;

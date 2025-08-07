function Sidebar({ children }) {
  return (
    <div className="h-full w-[280px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      {children}
    </div>
  );
}

export default Sidebar;

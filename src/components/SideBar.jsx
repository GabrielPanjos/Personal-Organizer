function Sidebar({ children }) {
  return (
    <nav className="h-full w-[280px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      <ul>{children}</ul>
    </nav>
  );
}

export default Sidebar;

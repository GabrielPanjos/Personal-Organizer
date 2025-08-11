function SettingsButton(props) {
  return (
    <li className="flex justify-center items-center w-full h-[30px] bg-[#FFFFFF] dark:bg-[#1E1E1E] hover:bg-[#DDE3E8] dark:hover:dark:bg-[#2E2E2E]">
      <button
        {...props}
        className="flex items-center pr-2 pl-2 w-[240px] h-[40px]"
      >
        <props.Icon className="w-4 h-4" />
        <span className="text-[12px] ml-3 ">{props.children}</span>
      </button>
    </li>
  );
}

export default SettingsButton;

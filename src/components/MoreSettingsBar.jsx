function MoreSettingsBar(props) {
  return (
    <ul
      {...props}
      className="absolute flex flex-col text-[14px] w-[150px] rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]"
    >
      {props.children}
    </ul>
  );
}

export default MoreSettingsBar;

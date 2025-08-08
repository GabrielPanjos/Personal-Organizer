function Input(props) {
  return (
    <div className="w-[300px]">
      <input
        {...props}
        className={`flex pr-4 pl-4 mt-2 ${props.pb}  w-[300px] ${props.h} text-[14px] bg-[#1E2A38] dark:bg-[#2E2E2E] rounded`}
      ></input>
    </div>
  );
}

export default Input;

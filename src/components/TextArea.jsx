function TextArea(props) {
  return (
    <div className="w-[300px]">
      <textarea
        {...props}
        className={`flex pr-4 pt-2 pl-4 mt-2 ${props.pb} w-[300px] ${props.h} resize-none overflow-hidden text-[14px] bg-[#1E2A38] dark:bg-[#2E2E2E] rounded`}
      ></textarea>
    </div>
  );
}

export default TextArea;

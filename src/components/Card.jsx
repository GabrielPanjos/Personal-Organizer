function Card({ title, description }) {
  return (
    <li className="flex items-center text-[14px] w-[300px] h-[200px] mt-12 rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      <div className="w-full h-full">
        <div className="w-full h-[40%] pt-4 pl-4 pr-4">
          <h1 className="font-medium">{title}</h1>
          <p className="text-[12px]">{description}</p>
        </div>
        <div className="w-full h-[60%]"></div>
      </div>
    </li>
  );
}

export default Card;

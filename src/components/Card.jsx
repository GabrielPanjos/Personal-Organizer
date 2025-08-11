import { Ellipsis } from "lucide-react";
import { useState } from "react";
import MoreSettingsBar from "./MoreSettingsBar";

function Card({ title, description }) {
  const [more, setMore] = useState(false);
  const [activeCardId, setActiveCardId] = useState(false);

  function toggleMoreSettingsBar() {
    const newActiveCardId = !activeCardId;
    setActiveCardId(newActiveCardId);
  }

  return (
    <>
      <li
        onMouseEnter={() => setMore(true)}
        onMouseLeave={() => setMore(false)}
        className="flex items-center text-[14px] w-[300px] h-[200px] mt-12 rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]"
      >
        <div className="w-full h-full">
          <div className="flex flex-row justify-between w-full h-[40%] pt-4 pl-4 pr-4">
            <div>
              <h1 className="font-medium">{title}</h1>
              <p className="text-[12px]">{description}</p>
            </div>
            <div>
              {more && (
                <button onClick={toggleMoreSettingsBar}>
                  <Ellipsis className="size-5" />
                </button>
              )}
            </div>
          </div>
          <div className="w-full h-[60%]"></div>
        </div>
      </li>
      {activeCardId && <MoreSettingsBar />}
    </>
  );
}

export default Card;

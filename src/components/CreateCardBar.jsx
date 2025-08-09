import SubmitButton from "./SubmitButton";
import Input from "./Input";
import TextArea from "./TextArea";

import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";

function CreateCardBar() {
  const [card, setCard] = useState({
    title: "",
    description: "",
  });
  const { createCard } = useContext(CardContext);

  return (
    <div className="flex flex-col items-center w-[350px] h-[320px] mt-12 rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCard(card.title, card.description);
          setCard({ title: "", description: "" });
        }}
        className="flex flex-col items-center w-[350px]"
      >
        <div className="w-[300px] mb-5 mt-5">
          <div>
            <label className="font-medium">título: *</label>
          </div>
          <Input
            onChange={(e) =>
              setCard({ title: e.target.value, description: card.description })
            }
            value={card.title}
            h={"h-[35px]"}
            placeholder="digite o título da categoria:"
          />
        </div>
        <div className="w-[300px]">
          <div>
            <label className="font-medium">descrição:</label>
          </div>
          <TextArea
            onChange={(e) =>
              setCard({ title: card.title, description: e.target.value })
            }
            value={card.description}
            maxLength={200}
            pb={"pb-[90px]"}
            h={"h-[130px]"}
            placeholder="digite a descrição da categoria:"
          />
        </div>
        <div className="w-full flex justify-end mt-[12px] mr-4">
          <SubmitButton type="submit" />
        </div>
      </form>
    </div>
  );
}

export default CreateCardBar;

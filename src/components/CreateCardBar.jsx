import SubmitButton from "./SubmitButton";
import Input from "./Input";

function CreateCardBar() {
  return (
    <div className="flex flex-col items-center w-[350px] h-[320px] mt-12 rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      <form className="flex flex-col items-center w-[350px]">
        <div className="w-[300px] mb-5 mt-5">
          <div>
            <label className="font-medium">título: *</label>
          </div>
          <Input h={"h-[35px]"} placeholder="digite o título da categoria:" />
        </div>
        <div className="w-[300px]">
          <div>
            <label className="font-medium">descrição:</label>
          </div>
          <Input
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

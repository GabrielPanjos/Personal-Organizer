import CardBarInput from "./CardBarInput";

function CreateCardBar() {
  return (
    <div className="flex flex-col items-center w-[350px] h-[300px] mt-12 rounded bg-[#FFFFFF] dark:bg-[#1E1E1E] border-2 border-[#DDE3E8] dark:border-[#2E2E2E]">
      <form>
        <div className="w-[300px]">
          <h1 className="mt-5">título:</h1>
        </div>
        <CardBarInput />
      </form>
    </div>
  );
}

export default CreateCardBar;

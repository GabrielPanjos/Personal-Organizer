import { Plus } from "lucide-react";

function Button() {
  return (
    <button className="h-[50px] w-[50px] mt-12 flex items-center justify-center rounded-[100%] bg-[#1E2A38] dark:bg-[#1E2A38] hover:bg-[#2A3B4C] ">
      <Plus />
    </button>
  );
}

export default Button;

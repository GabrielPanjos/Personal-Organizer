import { Search } from "lucide-react";

function SearchInput({ filterCards }) {
  return (
    <div className="relative w-[240px] text-[#ECEFF1]">
      <Search className="absolute left-2 top-9.5 transform -translate-y-1/2 w-4 h-4" />
      <input
        onChange={(e) => filterCards(e.target.value)}
        className="flex items-center pr-4 pl-8 mt-5 mb-5 w-[240px] h-[35px] text-[14px] bg-[#1E2A38] dark:bg-[#2E2E2E] rounded"
        placeholder="procurar pelo nome..."
      ></input>
    </div>
  );
}

export default SearchInput;

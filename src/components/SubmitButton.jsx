import { ChevronRight } from "lucide-react";

function SubmitButton({ props }) {
  return (
    <button {...props}>
      <ChevronRight />
    </button>
  );
}

export default SubmitButton;

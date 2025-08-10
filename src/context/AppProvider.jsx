import { CardProvider } from "./CardContext";
import { ModalDialogProvider } from "./ModalDialogContext";

export function AppProvider({ children }) {
  return (
    <ModalDialogProvider>
      <CardProvider>{children}</CardProvider>
    </ModalDialogProvider>
  );
}

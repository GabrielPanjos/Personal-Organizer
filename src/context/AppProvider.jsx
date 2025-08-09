import { CardProvider } from "./CardContext";

export function AppProvider({ children }) {
  return <CardProvider>{children}</CardProvider>;
}

import { AppProvider } from "./app-provider";
import { AppRouter } from "./app-router";

export function App() {
  return (
    <div className="">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

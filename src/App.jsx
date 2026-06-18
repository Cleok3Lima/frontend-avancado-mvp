import { FlashcardsProvider } from "./context/FlashcardsContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <FlashcardsProvider>
      <AppRouter />
    </FlashcardsProvider>
  );
}

export default App;

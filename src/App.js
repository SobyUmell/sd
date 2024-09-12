import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1 } from "./pages/auth-1";
import { Auth2 } from "./pages/auth-2";
import { Auth3 } from "./pages/auth-3";

function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <Auth3 />
      </ScreenContainer>
    </div>
  );
}

export default App;

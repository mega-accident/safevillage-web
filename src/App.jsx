import { Outlet } from "react-router";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Outlet />
    </div>
  );
}

export default App;

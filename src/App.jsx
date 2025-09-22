import { Outlet } from "react-router";
import BottomBar from "./components/Bottonmbar";

function App() {
  return (
    <div>
      <Outlet />
      <BottomBar />
    </div>
  );
}

export default App;

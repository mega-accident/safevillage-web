import { createBrowserRouter } from "react-router";
import App from "./App";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
]);

export default router;

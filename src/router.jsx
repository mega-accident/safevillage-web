import { createBrowserRouter } from "react-router";
import App from "./App";
import LoginPage from "./pages/Login";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "reports",
        element: <Report />,
      },
      {
        path: "list",
        element: <List />,
      },
    ],
  },
]);

export default router;

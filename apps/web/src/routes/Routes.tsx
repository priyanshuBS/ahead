import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app" replace />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default appRouter;

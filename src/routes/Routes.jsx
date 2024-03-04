import { Navigate, useRoutes } from "react-router-dom";
import Start from "../pages/Start";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Start />,
    },
    { path: "home", element: <Home /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Routes;

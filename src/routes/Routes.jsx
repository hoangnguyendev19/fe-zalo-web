import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    { path: "home", element: <Home /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Routes;

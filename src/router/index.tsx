import { createBrowserRouter, Outlet } from "react-router-dom";
import PrivateComponent from "../components/PrivateComponent";
import Post from "../pages/Post/Post";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import NotFoundPage from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/profile",
    children: [
      {
        path: "",
        element: <NotFoundPage />,
      },
      {
        path: "post",
        element: <PrivateComponent component={Post} />,
      },
    ],
  },
]);

export default router;

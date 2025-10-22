import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root/Root";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>error 404</p>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;

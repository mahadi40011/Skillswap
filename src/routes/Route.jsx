import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root/Root";
import Profile from "../pages/Profile/Profile";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../components/TermsConditions/TermsConditions";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms",
        Component: TermsConditions,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;

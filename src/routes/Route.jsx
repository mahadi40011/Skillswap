import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root/Root";
import Profile from "../pages/Profile/Profile";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../components/TermsConditions/TermsConditions";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SkillDetails from "../pages/SkillDetails/SkillDetails";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
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
      {
        path: "/skill-details/:id",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
  {
    path: "*",
    component: ErrorPage,
  },
]);

export default router;

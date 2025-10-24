import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SkillDetails from "../pages/SkillDetails/SkillDetails";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Profile from "../pages/Profile/Profile";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to={"/login"} state={location.pathname} />;

  return children;
};

export default PrivateRoute;

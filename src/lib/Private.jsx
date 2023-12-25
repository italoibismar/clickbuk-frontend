import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import propTypes from "prop-types";

import { AuthContext } from "../context/AuthContext";
import { LaunchScreen } from "../components/LaunchScreen";

export function Private({ isPrivate }) {
  const { auth, loading } = useContext(AuthContext);

  if(loading) {
      return <LaunchScreen isLoading={loading} />
  }

  if (!auth && isPrivate) {
    window.location.href = "./acesso";
  }

  if (auth && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

Private.propTypes = {
    isPrivate: propTypes.bool
}
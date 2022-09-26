import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const token = window.localStorage.getItem("token");

  // appel api sec token ?

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;

// image modif
// maj localStorage (ok)
// private routes 2nd*
// file name db

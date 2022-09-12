import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const userKeyRef = window.localStorage.getItem("userKeyRef");
//   console.log(userKeyRef);

  return userKeyRef !== null ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;

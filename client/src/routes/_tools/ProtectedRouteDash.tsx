import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CreateContext } from "../../hooks/useContext";

function ProtectedRouteDash() {
  const { dashboard: { stateDashboard: { login: {user} } } } = useContext(CreateContext)


  if (!user?.verifiedEmail) {
    return <Navigate to={"/"} />
  } else {
    return <Outlet />
  }
}

export default ProtectedRouteDash;
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useSession from "../../hooks/session";

export default function ProtectedRoute() {
  const session = useSession();
  let location = useLocation();

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

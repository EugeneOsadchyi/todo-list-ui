import { Navigate, Outlet } from "react-router-dom";
import useSession from "../../hooks/session";

export default function ProtectedRoute() {
  const session = useSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

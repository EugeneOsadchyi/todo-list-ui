import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logout } from "../hooks/session";

export default function Logout() {
  useEffect(() => { logout(); }, [])

  return <Navigate to="/login" />;
}

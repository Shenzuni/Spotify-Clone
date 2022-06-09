import { useContext } from "react";
import { AuthContext } from "context/authContext";

export function useAuthContext() {
  const context = useContext(AuthContext)

  return context
}
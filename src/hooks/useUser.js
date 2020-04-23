import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function useUser() {
  const authContext = useContext(AuthContext);

  return authContext.currentUser;
}

export default useUser;

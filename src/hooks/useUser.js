import { useContext } from "react";
import { AuthContext } from "../components/Auth";

function useUser() {
  const authContext = useContext(AuthContext);

  return authContext.currentUser;
}

export default useUser;

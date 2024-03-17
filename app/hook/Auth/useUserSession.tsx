import { notify } from "@/components/Ui/Toast";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";

const useUserSession = () => {
  const router = useRouter();
  const url = router.asPath;
  const { handleAuth, handleUserCameFrom, handleUserCameFromForOAuth } =
    useAuth();

  const setCurrentPathForOAuth = () => {
    handleUserCameFromForOAuth(url);
  };

  const signUp = () => {
    // set the route the user came from to context
    handleUserCameFrom(url);
  };

  const loginIn = () => {
    // set the route the user came from to context
    handleUserCameFrom(url);
  };

  const logout = () => {
    const token = localStorage.getItem("zpt");

    if (token) {
      localStorage.removeItem("zpt");
      notify({
        message: "Logged out",
        type: "success",
        theme: "light",
      });
      handleAuth(undefined);
      router.push("/");
    }
  };

  return { signUp, loginIn, logout, setCurrentPathForOAuth };
};

export default useUserSession;

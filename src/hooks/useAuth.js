import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const useAuth = () => {
  const { setAuth } = useContext(AuthContext);
  const { push } = useNavigate();
  const Logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };
  const Login = (email, password) => {
    const auth = { password, email };
    localStorage.setItem("auth", JSON.stringify(auth));
    setAuth(auth);
    push("/");
  };
  return { Logout, Login };
};

export default useAuth;

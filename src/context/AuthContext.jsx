import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // const password = localStorage.getItem("password");
    const password = Cookies.get("pwd_active_one");
    if (password) {
      setPassword(password);
      navigate("/portfolio");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}; 
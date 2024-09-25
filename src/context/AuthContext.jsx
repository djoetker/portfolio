import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [password, setPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // const password = localStorage.getItem("password");
    const password = Cookies.get("pwd_active_one");
    if (password) {
      setPassword(true);
      setIsLoading(false);
      navigate("/portfolio");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ password, setPassword, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}; 
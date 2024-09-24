import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const password = localStorage.getItem("password");
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
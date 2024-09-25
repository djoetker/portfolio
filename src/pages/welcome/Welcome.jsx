import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./Welcome.css";
import { useAuth } from "../../context/AuthContext";

function Welcome() {
  const [userInput, setUserInput] = useState("");
  const [pwCheck, setPwCheck] = useState(true);
  const { password, setPassword } = useAuth();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput === "iwouldhirehim") {
      setPassword(userInput);
      // localStorage.setItem("password", true);
      Cookies.set("pwd_active_one", true, { expires: 1 });
      navigate("/portfolio");
    } else {
      setPwCheck(false);
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="welcome-container"
        transition={{
          duration: 3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 3,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <h1>hi.</h1>

      </motion.div>

      <div>
        <section>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter password"

            />
            <button>Enter</button>
            {!pwCheck && <p>Incorrect password</p>}
          </form>
        </section>
      </div>
    </>
  );
};

export default Welcome;
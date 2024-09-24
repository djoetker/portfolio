import "./Headline.css";

import { motion } from "framer-motion";


function Headline({ destination, headline, isActive }) {

  return (
    <a className="navbar-button" href={destination}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={`headline${isActive ? "-active" : ""}`}
      >{headline}
      </motion.h2>
    </a>
  )
};

export default Headline;
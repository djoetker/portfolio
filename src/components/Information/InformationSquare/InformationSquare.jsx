import "./InformationSquare.css";

import { motion } from "framer-motion";

function InformationSquare({ title, description }) {
  return (
    <motion.div
      className="information-square"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      viewport={{
        margin: "-400px",
        once: true
      }}
    >
      <h3 className="information-square-title">{title}</h3>
      <p className="information-square-description">{description}</p>
    </motion.div>
  );
};

export default InformationSquare;
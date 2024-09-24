import "./Introduction.css";
import jan_siede from "../../assets/images/photo_siede.png";
import { useSectionVisibility } from "../../context/SectionVisibility";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Introduction() {

  const { activeSection, setActiveSection } = useSectionVisibility();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-400px 0px -300px 0px" });

  console.log(isInView);

  useEffect(() => {
    if (isInView) {
      console.log("Introduction is in view");
      setActiveSection("intro");
    }
  }, [isInView, activeSection]);

  return (
    <section
      className="introduction-container"
      id="introduction"
      ref={sectionRef}
    >

      <div className="image-text-container">
        <motion.div
          className="image-container"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <img src={jan_siede} alt="picture of jan siede" />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="title-container">
            <h3>Hello, I am Jan.</h3>
            <p className="text">I am a full-stack web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am constantly learning and improving my skills to become a better developer. I am looking for a position where I can use my skills to create amazing websites and applications.</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="arrow-down"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, ease: "easeInOut", delay: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>

      </motion.div>

    </section>
  );
};

export default Introduction;
import "./Projects.css";
import projectDB from "../../utilities/projectDB";
import { useSectionVisibility } from "../../context/SectionVisibility";
import ProjectSquare from "./ProjectSquare/ProjectSquare";


import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";



// const gridContainerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5
//     }
//   }
// };

// const gridSquareVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       duration: 4
//     }
//   }
// };

function Projects() {
  const { activeSection, setActiveSection } = useSectionVisibility();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-400px 0px -400px 0px", threshold: 0.8 });

  let gridContainerVariants, gridSquareVariants;

  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    gridContainerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5
        }
      }
    };
    gridSquareVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 4
        }
      }
    };
  }

  useEffect(() => {
    if (isInView) {
      console.log("Projects is in view");
      setActiveSection("projects");
    }
  }, [isInView, activeSection]);

  return (
    <section
      ref={sectionRef}
      className="projects-container"
      id="projects"
    >
      <motion.div
        className="projects-show"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          margin: "-300px",
          once: true
        }}
      >
        {projectDB.map((project, index) => (
          <motion.div
            key={index}
            variants={gridSquareVariants}
            className="project-square"
          >
            <ProjectSquare key={index} project={project} />
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default Projects;
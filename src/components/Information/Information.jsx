import "./Information.css";
import informationText from "../../utilities/informationText";
import InformationSquare from "./InformationSquare/InformationSquare";
import { useSectionVisibility } from "../../context/SectionVisibility";


import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 4
    }
  }
};

function Information() {
  const { activeSection, setActiveSection } = useSectionVisibility();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-400px 0px -400px 0px", threshold: 0.9 });

  useEffect(() => {
    if (isInView) {
      console.log("Information is in view");
      setActiveSection("info");
    }
  }, [isInView, activeSection]);

  return (
    <section
      ref={sectionRef}
      className="information-container"
      id="information"
    >
      <div className="information-squares-container">

        {informationText.map((info, index) => (
          <InformationSquare key={index} title={info.title} description={info.description} />
        ))}
      </div>
    </section>
  );
};

export default Information;
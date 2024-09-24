import Contact from "../../components/Contact/Contact";
import Information from "../../components/Information/Information";
import Introduction from "../../components/Introduction/Introduction";
import Projects from "../../components/Projects/Projects";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <Introduction />
      <Projects />
      <Information />
      <Contact />
    </>
  );
};

export default Portfolio;
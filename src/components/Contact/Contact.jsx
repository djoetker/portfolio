import "./Contact.css";
import email from "../../assets/images/email.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import background_contact from "../../assets/images/background_contact.png";
import { useSectionVisibility } from "../../context/SectionVisibility";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {

  const { activeSection, setActiveSection } = useSectionVisibility();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-400px 0px -400px 0px", threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      console.log("Contact is in view");
      setActiveSection("contact");
    }
  }, [isInView, activeSection]);

  return (
    <motion.section
      ref={sectionRef}
      className="contact-container"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2
        }
      }}
      viewport={{
        margin: "-400px",
        once: true
      }}
    >

      <div className="contact-sub">

        <section className="contact-email">
          <p className="contact-text">
            I'm currently looking for new opportunities and would love to hear from you! Please feel free to reach out to me at:
          </p>
          <div className="logos">
            <a className="email" href="mailto:jansiede@posteo.de">
              <img src={email} alt="email" />
            </a>
            <a className="social" href="https://www.linkedin.com/in/jan-siede/"  >
              <img src={linkedin} alt="linkedin logo" />
            </a>
            <a className="social" href="https://github.com/djoetker"  >
              <img src={github} alt="github logo" />
            </a>
          </div>
        </section>

      </div>




    </motion.section>
  );
}

export default Contact;
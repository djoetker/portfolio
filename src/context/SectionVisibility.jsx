import React, { createContext, useContext, useRef, useState, useLayoutEffect, useEffect } from "react";
import { useInView } from "framer-motion";

const SectionVisibilityContext = createContext({});

export const SectionVisibilityProvider = ({ children }) => {

  const [activeSection, setActiveSection] = useState(null);
  const [introState, setIntroState] = useState(false);
  const [projectsState, setProjectsState] = useState(false);
  const [infoState, setInfoState] = useState(false);
  const [contactState, setContactState] = useState(false);




  return (
    <SectionVisibilityContext.Provider value={{
      introState,
      projectsState,
      setProjectsState,
      infoState,
      contactState,
      activeSection,
      setActiveSection
    }}>
      {children}
    </SectionVisibilityContext.Provider>
  );
};

export const useSectionVisibility = () => {
  const sectionContext = useContext(SectionVisibilityContext);
  return sectionContext;
};

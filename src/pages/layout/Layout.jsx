import Headline from "../../components/Headline/Headline";
import "./Layout.css";
import { useSectionVisibility } from "../../context/SectionVisibility";

import { Outlet } from "react-router-dom";

function Layout() {
  const { activeSection } = useSectionVisibility();

  return (
    <>
      <section className="layout-container">
        <div className="header-container">
          <h1 className="header">JAN SIEDE</h1>
        </div>
        <div className="navbar-container">
          <Headline destination="#introduction" headline="Introduction" isActive={activeSection === "intro"} />
          <Headline destination="#projects" headline="Projects" isActive={activeSection === "projects"} />
          <Headline destination="#information" headline="Information" isActive={activeSection === "info"} />
          <Headline destination="#contact" headline="Contact" isActive={activeSection === "contact"} />
        </div>
      </section>
      <section className="layout-content">
        <Outlet />
      </section>
    </>
  );
}

export default Layout;

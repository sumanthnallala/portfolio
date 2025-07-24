import React, { useState } from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import About from "./components/About";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ErrorBoundary>
      <div
        className={`main-container ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="sections">
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

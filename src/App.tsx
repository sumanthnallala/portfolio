import React, { useState } from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ErrorBoundary>
      <div className={`main-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div>
          <About />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

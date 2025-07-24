import React, { useState } from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ErrorBoundary>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </ErrorBoundary>
  );
}

export default App;

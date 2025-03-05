import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary";
const About = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Hobbies = lazy(() => import("./components/Hobbies"));

function App() {
  return (
    <ErrorBoundary>
      <div className="main-container">
        <Header />
        <div className="child-container">
          <Routes>
            <Route index Component={Home}></Route>
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/skills"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Skills />
                </Suspense>
              }
            />
            <Route
              path="/experience"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Experience />
                </Suspense>
              }
            />
            <Route
              path="/education"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Education />
                </Suspense>
              }
            />
            {/* <Route
              path="/hobbies"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Hobbies />
                </Suspense>
              }
            /> */}
            <Route path="*" element={<div>Page Not Found</div>}></Route>
          </Routes>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

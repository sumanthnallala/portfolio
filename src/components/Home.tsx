import React, { Suspense } from "react";
import "./Home.scss";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="home-container">Home</div>
    </Suspense>
  );
};

export default Home;

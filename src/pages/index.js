import React from "react";
import Clients from "../components/clients";
import Hero from "../components/hero";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div>
      <SEO />
      <Hero />
      <Clients />
    </div>
  );
};

export default Home;

import React from "react";
import Clients from "../components/clients";
import Hero from "../components/hero";
import SEO from "../components/SEO";
import SingleService from "../components/singleService";
import SanityConnection from "../utils/sanityConnection";

const Home = () => {
  const allServices = SanityConnection("headers");
  return (
    <div>
      <SEO />
      <Hero />
      <Clients />
      <h2 className="text-2xl md:text-3xl font-semibold text-center py-2 text-white mt-8">
        Our Services
      </h2>
      {allServices.length > 0 &&
        allServices.map((item) => {
          return <SingleService key={item} heading={item} />;
        })}
    </div>
  );
};

export default Home;

import React from "react";
import Clients from "../components/clients";
import Hero from "../components/hero";
import SEO from "../components/SEO";
import SingleService from "../components/singleService";
import SanityConnection from "../utils/sanityConnection";

const allServices = ["Listings"];

const Home = () => {
  return (
    <div>
      <SEO />
      <Hero />
      <Clients />
      <h2 className="text-2xl md:text-3xl font-semibold text-center py-2 text-white mt-8">
        Our Services
      </h2>
      {allServices.map((item) => {
        const data = SanityConnection(item.toLowerCase());
        return <SingleService key={item} data={data} heading={item} />;
      })}
    </div>
  );
};

export default Home;

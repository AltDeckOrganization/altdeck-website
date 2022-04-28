import React from "react";
import Clients from "../components/clients";
import Hero from "../components/hero";
import SEO from "../components/SEO";
import SingleService from "../components/singleService";
import SanityConnection from "../utils/sanityConnection";

const allServices = [
  { heading: "Listings", search: "listings" },
  { heading: "Billboards", search: "billboards" },
  { heading: "Celebrities", search: "celebrities" },
  { heading: "Chinese Marketing", search: "chinese_marketing" },
  { heading: "Crypto Influencers", search: "crypto_influencers" },
  { heading: "Mass Targeting", search: "mass_targeting" },
  { heading: "Press Releases & Articles", search: "press_releases_articles" },
  { heading: "Rappers", search: "rappers" },
  { heading: "Sentiment Boost", search: "sentiment_boost" },
  { heading: "Trending", search: "trending" },
  { heading: "Verification", search: "verification" },
  { heading: "Other", search: "other" },
];

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
        const data = SanityConnection(item.search);
        return <SingleService key={item} data={data} heading={item} />;
      })}
    </div>
  );
};

export default Home;

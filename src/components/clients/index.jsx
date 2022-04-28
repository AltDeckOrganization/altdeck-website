import React from "react";
import { imageUrlBuilding } from "../../utils/imgBuilder";
import SanityConnection from "../../utils/sanityConnection";

const Clients = () => {
  const data = SanityConnection("partners");
  return (
    <div className="bg-[#4E944F] rounded-xl text-center px-4 py-8" id="clients">
      <h2 className="text-2xl md:text-3xl font-semibold py-2 text-white">
        Our Trusted Clients
      </h2>
      <p className="text-md: md:text-lg">
        These and other crypto projects have worked with us to get their token
        to the moon.
      </p>
      <div className="flex items-center justify-evenly mt-8 flex-col md:flex-row">
        {data.map((item) => (
          <img
            src={imageUrlBuilding(item.mainImage)}
            alt={item.name}
            key={item._id}
            className="mt-4 max-w-20 max-h-12"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;

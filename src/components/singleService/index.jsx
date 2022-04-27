import React from "react";
import SingleCard from "../singleCard";

const SingleService = ({ data, heading }) => {
  return (
    <div className="mt-12">
      <h3 className="font-semibold text-xl md:text-2xl">{heading}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 place-items-center">
        {data.map((item) => (
          <SingleCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SingleService;

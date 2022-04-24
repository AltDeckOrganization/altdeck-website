import React from "react";

const Clients = () => {
  return (
    <div className="bg-[#4E944F] rounded-xl text-center px-4 py-8">
      <h2 className="text-xl md:text-2xl font-semibold py-2 text-white">
        Our Trusted Clients
      </h2>
      <p className="text-md: md:text-lg">
        These and other crypto projects have worked with us to get their token
        to the moon.
      </p>
      <div className="flex items-center justify-evenly mt-8 flex-col md:flex-row">
        <img
          src="https://www.degen.marketing/img/logos/logo-client-babydogecoin.png"
          alt=""
          className="mt-4"
        />
        <img
          src="https://www.degen.marketing/img/logos/logo-client-babydogecoin.png"
          alt=""
          className="mt-4"
        />
        <img
          src="https://www.degen.marketing/img/logos/logo-client-babydogecoin.png"
          alt=""
          className="mt-4"
        />
        <img
          src="https://www.degen.marketing/img/logos/logo-client-babydogecoin.png"
          alt=""
          className="mt-4"
        />
        <img
          src="https://www.degen.marketing/img/logos/logo-client-babydogecoin.png"
          alt=""
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Clients;

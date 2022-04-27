import React from "react";
import SEO from "../../components/SEO";

const SingleService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center grid-flow-row-dense">
      <SEO />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          CoinGecko trending service (Search bar) [Top 1-5] [1 or 24 hours]
        </h1>
        <h4 className="text-lg md:text-xl my-4 font-light">$1440</h4>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          soluta excepturi asperiores ratione laboriosam ex quis nihil odio, a
          veritatis quibusdam nostrum incidunt sed laudantium voluptatum aliquam
          amet molestias quo, error velit in, minus dolor. Et, unde nulla iste
          quibusdam quia dolorem cum iusto alias accusantium quam necessitatibus
          id ea? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae soluta excepturi asperiores ratione laboriosam ex quis
          nihil odio, a veritatis quibusdam nostrum incidunt sed laudantium
          voluptatum aliquam amet molestias quo, error velit in, minus dolor.
          Et, unde nulla iste quibusdam quia dolorem cum iusto alias accusantium
          quam necessitatibus id ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae soluta excepturi asperiores ratione
          laboriosam ex quis nihil odio, a veritatis quibusdam nostrum incidunt
          sed laudantium voluptatum aliquam amet molestias quo, error velit in,
          minus dolor. Et, unde nulla iste quibusdam quia dolorem cum iusto
          alias accusantium quam necessitatibus id ea? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Recusandae soluta excepturi
          asperiores ratione laboriosam ex quis nihil odio, a veritatis
          quibusdam nostrum incidunt sed laudantium voluptatum aliquam amet
          molestias quo, error velit in, minus dolor. Et, unde nulla iste
          quibusdam quia dolorem cum iusto alias accusantium quam necessitatibus
          id ea?
        </p>
      </div>
      <img
        className="h-full object-contain rounded-xl"
        // style={{ gridRow: 1 }}
        src="https://news.blockchaingame.world/images/etherscan.png"
      />
      <div className="mt-8 text-center">
        <p className="text-[#e9efc0]">
          We either respond instantly or within 8 hours!
        </p>
        <a href={"https://telegram.org/"} target={"_blank"} rel={"noreferrer"}>
          <button className="bg-[#4e944f] btn btn-block w-full py-4 mt-4 font-semibold text-lg md:text-xl rounded-xl">
            <i className="fab fa-telegram font-normal mr-3 text-2xl"></i>
            Contact on Telegram
          </button>
        </a>
      </div>
    </div>
  );
};

export default SingleService;

import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import SanityConnection from "../../utils/sanityConnection";
import SanityBlockContent from "@sanity/block-content-to-react";
import { imageUrlBuilding } from "../../utils/imgBuilder";

const SingleService = () => {
  const router = useRouter();
  const [singleItemData, setSingleItemData] = useState({});
  const { services, id } = router.query;
  const data = SanityConnection(services);
  useEffect(() => {
    setSingleItemData(data.find((item) => item.slug.current === id));
  }, [data, id]);
  return (
    <div>
      {singleItemData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center grid-flow-row-dense">
          <SEO />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {singleItemData.heading}
            </h1>
            <h4 className="text-lg md:text-xl my-4 font-light">
              ${singleItemData.price}
            </h4>
            <div className="text-gray-300">
              <SanityBlockContent blocks={singleItemData.body} />
            </div>
          </div>
          {singleItemData.mainImage && (
            <img
              className="h-full object-contain rounded-xl"
              src={imageUrlBuilding(singleItemData.mainImage)}
              alt={singleItemData.heading}
            />
          )}
          <div className="mt-8 text-center">
            <p className="text-[#e9efc0]">
              We either respond instantly or within 8 hours!
            </p>
            <a
              href={"https://telegram.org/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button className="bg-[#4e944f] btn btn-block w-full py-4 mt-4 font-semibold text-lg md:text-xl rounded-xl">
                <i className="fab fa-twitter font-normal mr-3 text-2xl"></i>
                Contact on Twitter
              </button>
            </a>
            <a
              href={"https://telegram.org/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button className="bg-[#4e944f] btn btn-block w-full py-4 mt-4 font-semibold text-lg md:text-xl rounded-xl">
                <i className="fa fa-envelope font-normal mr-3 text-2xl"></i>
                Contact on Mail
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleService;

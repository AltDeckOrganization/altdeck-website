import Link from "next/link";
import React from "react";
import SanityConnection from "../../utils/sanityConnection";

const SingleItem = ({ title, text, link }) => (
  <a href={link} className="icon-box gb b">
    <div className="icon">
      <i className="far fa-users-class"></i>
    </div>
    <div className="text">
      <div className="title">
        {title} <i className="far fa-arrow-right"></i>
      </div>
      <div className="sub-text">{text}</div>
    </div>
  </a>
);

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <div className="logo menu-item-without text-2xl cursor-pointer">
          AltDeck
        </div>
      </Link>
      <div id="menu" className="flex w-[430px]">
        <div className="menu-item highlight">
          <div className="menu-text">
            <a href="#">
              Services <i className="fas fa-chevron-down"></i>
            </a>
          </div>
          <div className="sub-menu double">
            <h3 className="mb-3">NFTS</h3>
            <div></div>
            <SingleItem link="#mass_targeting" title="Mass DMs" />
            <SingleItem link="#campaigns" title="Campaigns" />
            <SingleItem
              link="#press_releases_articles"
              title="Press Releases"
            />
            <SingleItem link="#billboards" title="BillBoards" />
            <h3 className="mb-4">AltCoins</h3>
            <div></div>
            <SingleItem link="#mass_targeting" title="Mass DMs" />
            <SingleItem link="#influencers" title="Influencers" />
            <SingleItem link="#billboards" title="BillBoards" />
            <SingleItem link="#listings" title="Listings" />
            <SingleItem link="#trending" title="Trending" />
            <SingleItem link="#press_releases_articles" title="Press Release" />
            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <a href="#clients" className="menu-item-without">
          Clients
        </a>

        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
          </div>
        </div>
      </div>
      <div className="menu-item-without -z-10">
        <a href={"https://telegram.org/"} target={"_blank"} rel={"noreferrer"}>
          <button className="h-fit font-bold text-white bg-[#4E944F] py-4 px-4 rounded-xl">
            Contact Us
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

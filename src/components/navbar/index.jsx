import Link from "next/link";
import React, { useState } from "react";

const SingleItem = () => (
  <div className="icon-box gb b">
    <div className="icon">
      <i className="far fa-users-class"></i>
    </div>
    <div className="text">
      <div className="title">
        Teach <i className="far fa-arrow-right"></i>
      </div>
      <div className="sub-text">In Classroom</div>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <nav>
      <div className="logo menu-item-without text-2xl">Altdeck</div>
      <div id="menu" className="flex w-[430px]">
        <div className="menu-item-without">Clients</div>

        <div className="menu-item highlight">
          <div className="menu-text">
            <a href="#">Services</a>
          </div>
          <div className="sub-menu double">
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <div className="sub-menu-holder"></div>
          </div>
        </div>

        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
          </div>
        </div>
      </div>
      <div className="menu-item-without -z-10">
        <button className="h-fit font-bold text-white bg-[#4E944F] py-4 px-4 rounded-xl">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React, { useState } from "react";

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
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
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
            <div className="icon-box gb c">
              <div className="icon">
                <i className="far fa-school"></i>
              </div>
              <div className="text">
                <div className="title">
                  Learn <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">By Video</div>
              </div>
            </div>
            <div className="icon-box gb d">
              <div className="icon">
                <i className="far fa-chess-rook"></i>
              </div>
              <div className="text">
                <div className="title">
                  Keep <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">The Castle</div>
              </div>
            </div>
            <div className="icon-box gb e">
              <div className="icon">
                <i className="far fa-video-plus"></i>
              </div>
              <div className="text">
                <div className="title">
                  Become <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">A Creator</div>
              </div>
            </div>
            <div className="icon-box gb f">
              <div className="icon">
                <i className="far fa-cat"></i>
              </div>
              <div className="text">
                <div className="title">
                  Understand <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Our Journey</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
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
            <div className="icon-box gb c">
              <div className="icon">
                <i className="far fa-school"></i>
              </div>
              <div className="text">
                <div className="title">
                  Learn <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">By Video</div>
              </div>
            </div>
            <div className="icon-box gb d">
              <div className="icon">
                <i className="far fa-chess-rook"></i>
              </div>
              <div className="text">
                <div className="title">
                  Keep <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">The Castle</div>
              </div>
            </div>
            <div className="icon-box gb e">
              <div className="icon">
                <i className="far fa-video-plus"></i>
              </div>
              <div className="text">
                <div className="title">
                  Become <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">A Creator</div>
              </div>
            </div>
            <div className="icon-box gb f">
              <div className="icon">
                <i className="far fa-cat"></i>
              </div>
              <div className="text">
                <div className="title">
                  Understand <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Our Journey</div>
              </div>
            </div>
            <div className="sub-menu-holder"></div>
          </div>
        </div>

        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
          </div>
        </div>
      </div>
      <div className="menu-item-without">
        <button className="h-fit font-bold text-white bg-blue-500 py-4 px-4 rounded-xl">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <div className={`${footerStyles.footer} flex items-center`}>
      <div className="">
        &copy; 2022{" "}
        <span className={`font-bold text-lg  ${footerStyles.span}`}>
          AltDeck
        </span>
      </div>
      <></>
      <div>
        <ul
          className={`flex space-x-8 text-[#808080] text-sm font-bold ${footerStyles.footerUl}`}
        >
          <li>
            <Link href="/tos">TOS</Link>
          </li>
          <li>
            <Link href="/faqs">FAQ</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

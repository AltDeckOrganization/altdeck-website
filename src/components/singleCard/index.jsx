import React from "react";
import Link from "next/link";
import styles from "./singleCard.module.css";
import { imageUrlBuilding } from "../../utils/imgBuilder";

const SingleCard = ({ data, heading }) => {
  return (
    <Link href={`/${heading}/${data.slug.current}`}>
      <div className={styles.a_box}>
        <div className={styles.img_container}>
          <div className={styles.img_inner}>
            <div className={styles.inner_skew}>
              <img src={imageUrlBuilding(data.mainImage)} />
            </div>
          </div>
        </div>
        <div className={styles.text_container}>
          <h3>{data.heading}</h3>
          <div>{data.body[0].children[0].text}</div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;

import React from "react";
import Link from "next/link";
import styles from "./singleCard.module.css";

const SingleCard = () => {
  return (
    <Link href={"/services/1"}>
      <div className={styles.a_box}>
        <div className={styles.img_container}>
          <div className={styles.img_inner}>
            <div className={styles.inner_skew}>
              <img src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2020/02/10104629/natureofcolors3.jpg" />
            </div>
          </div>
        </div>
        <div className={styles.text_container}>
          <h3>A blue bird</h3>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni odit
            quia, quisquam distinctio ut reprehenderit
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;

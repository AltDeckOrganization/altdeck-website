import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <h1 className="text-center text-2xl md:text-4xl font-bold">
        We will make your token go viral 🚀
      </h1>
      <p className="text-xl text-gray-200 w-10/12 text-center mt-2">
        Welcome to Altdeck Marketing — The #1 crypto marketing agency known for
        aggressive crypto shill campaigns.
      </p>
      <div>
        <div className={styles.row1_container}>
          <div className={`${styles.box} ${styles.box_down} ${styles.cyan}`}>
            <h2>$33M</h2>
            <p>Average market cap at ATH of our clients</p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>

          <div className={`${styles.box} ${styles.red}`}>
            <h2>2200%</h2>
            <p>Average price growth rate across our clients</p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div className={`${styles.box} ${styles.box_down} ${styles.blue}`}>
            <h2>10x</h2>
            <p>Increase in client&apos;s community members on average</p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.row2_container}>
          <div className={`${styles.box} ${styles.orange}`}>
            <h2>10x</h2>
            <p>Increase in client&apos;s community members on average</p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

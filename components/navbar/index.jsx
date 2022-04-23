import React, { useEffect, useState } from "react";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [width, setWidth] = useState();
  const CheckNav = () => {
    console.log(navbar);
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setNavbar(true);
      } else if (window.innerWidth < 768) {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    CheckNav();
  }, [width]);

  return (
    <header className={styles.nav_wrapper}>
      <nav
        className={`${styles.navbar} ${
          navbar && width < 768 && styles.nav_visible
        }`}
      >
        <div className={`${styles.nav} ${styles.left}`}>
          <span className={`${styles.gradient} ${styles.skew}`}>
            <h1 className={`${styles.logo} ${styles.un_skew}`}>
              <a href="#home">Altdeck</a>
            </h1>
          </span>
          <button
            id="menu"
            className={styles.btn_nav}
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <span className="fas fa-times"></span>
            ) : (
              <span className="fas fa-bars"></span>
            )}
          </button>
        </div>
        {navbar && (
          <div className={`${styles.nav} ${styles.right}`}>
            <a href="#home" className={`${styles.nav_link} ${styles.active}`}>
              <span className={styles.nav_link_span}>
                <span className={styles.u_nav}>Home</span>
              </span>
            </a>
            <a href="#home" className={`${styles.nav_link} ${styles.active}`}>
              <span className={styles.nav_link_span}>
                <span className={styles.u_nav}>Home</span>
              </span>
            </a>
            <a href="#home" className={`${styles.nav_link} ${styles.active}`}>
              <span className={styles.nav_link_span}>
                <span className={styles.u_nav}>Home</span>
              </span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>loket.design</p>
      <div className={styles.links_container}>
        <Link to="/products" className={styles.link}>
          products
        </Link>
        <Link to="/about" className={styles.link}>
          about us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

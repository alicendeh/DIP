import React from "react";
import styles from "./Header.module.css";

function Header({ hidden, title }) {
  return (
    <div className={`containerRow`}>
      <p className="display-4">{title} </p>
      <div
        className={`${styles.inputContainer} d-flex 
      ${hidden && `${styles.hideContainer}`}
      `}
      >
        <i className="fas fa-search "></i>
        <input type="text" className={styles.input} placeholder="Search..." />
        <i className="fas fa-chevron-down "></i>
      </div>
    </div>
  );
}

export default Header;

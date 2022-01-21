import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header({ hidden, title }) {
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  return (
    <div className={`containerRow`}>
      <p className="display-4">{title} </p>
      <div
        className={`${styles.inputContainer} d-flex 
      ${hidden && `${styles.hideContainer}`}
      `}
      >
        <i className="fas fa-search" value={searchValue}></i>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => search(e)}
          className={styles.input}
          placeholder="Search..."
        />
        {searchValue.length >= 1 ? (
          <i
            className={`fas fa-times ${styles.cross}`}
            onClick={clearInput}
          ></i>
        ) : (
          <i className="fas fa-chevron-down "></i>
        )}
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Dropdown } from "react-bootstrap";

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
        <i className={`fas fa-search  containerCenter`} value={searchValue}></i>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => search(e)}
          className={styles.input}
          placeholder="Search..."
        />
        {searchValue.length >= 1 ? (
          <i
            className={`fas fa-times  ${styles.cross}`}
            onClick={clearInput}
          ></i>
        ) : (
          <Dropdown>
            <Dropdown.Toggle
              style={{
                fontSize: "25px",
                outline: "none",
              }}
              variant="white"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Free </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Premium </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
}

export default Header;

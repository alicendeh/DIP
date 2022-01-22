import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Dropdown } from "react-bootstrap";

function Header({ hidden, title }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };
  const cancelMode = () => {
    setcurrentSelectValue("");
  };

  return (
    <div className={`containerRow ${styles.header}`}>
      {/* <SideBar openSideBar={toggleSideMenu} /> */}
      <div className={styles.headeritleContainer}>
        <p className={`display-6 `}>{title} </p>
        <i
          // onClick={() => settoggleSideMenu(!toggleSideMenu)}
          className={`fas fa-bars hide ${styles.menu}`}
        ></i>
      </div>
      <div
        className={`${styles.inputContainer} d-flex 
      ${hidden && `${styles.hideContainer}`}
      `}
      >
        <i className={`fas fa-search  containerCenter`} value={searchValue}></i>
        {currentSelectValue.length > 0 ? (
          <div className={`${styles.selectContainer} containerCenter`}>
            {currentSelectValue === "#/free" ? (
              <div className={`${styles.free} ${styles.mode}`}>
                <span>free</span>
                <div className={styles.cancelFree}>
                  <i
                    onClick={cancelMode}
                    className={`fas fa-times pr-3 d-flex-end  ${styles.cross}`}
                  ></i>
                </div>
              </div>
            ) : (
              <div className={`containerRow ${styles.premium} ${styles.mode}`}>
                <span>Premium</span>
                <i
                  onClick={cancelMode}
                  className={`fas fa-times pr-3 d-flex-end  ${styles.cross}`}
                ></i>
              </div>
            )}
          </div>
        ) : (
          <input
            type="text"
            value={searchValue}
            onChange={(e) => search(e)}
            className={styles.input}
            placeholder="Search..."
          />
        )}
        {searchValue.length >= 1 ? (
          <i
            className={`fas fa-times pr-3 containerCenter  ${styles.cross}`}
            onClick={clearInput}
          ></i>
        ) : (
          <Dropdown onSelect={(e) => setcurrentSelectValue(e)}>
            <Dropdown.Toggle
              // onSelect={(e) => console.log("sup")}
              style={{
                fontSize: "25px",
                outline: "none",
              }}
              variant="white"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/free">Free </Dropdown.Item>
              <Dropdown.Item href="#/premium">Premium </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
}

export default Header;

const SideBar = ({ openSideBar }) => {
  return (
    <div
      className={
        openSideBar ? `${styles.showSideMenu}` : `${styles.hideSideMenu}`
      }
    >
      Alice Ndeh
    </div>
  );
};

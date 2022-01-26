import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Dropdown } from "react-bootstrap";
import { usersFilteredList } from "../../../redux/actions/adminAction";
import { useDispatch } from "react-redux";

function Header({ hidden, title, filtrationList }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);

  const dispatch = useDispatch();

  const search = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();
      let result = filtrationList.filter(
        (item) =>
          item.name.toLowerCase().includes(itemToFilter) ||
          item.email.toLowerCase().includes(itemToFilter) ||
          item.plan.toLowerCase().includes(itemToFilter)
      );
      dispatch(usersFilteredList(result));
    } else {
      dispatch(usersFilteredList(filtrationList));
    }
  };

  const clearInput = () => {
    setSearchValue("");
    dispatch(usersFilteredList(filtrationList));
  };

  const cancelMode = () => {
    dispatch(usersFilteredList(filtrationList));

    setcurrentSelectValue("");
  };

  useEffect(() => {
    console.log(currentSelectValue, "here");
  }, [currentSelectValue]);

  const selectFunction = (e) => {
    setcurrentSelectValue(e);
    if (e == "#/free") {
      let res = filtrationList.filter((item) =>
        item.plan.toLowerCase().includes("free")
      );
      dispatch(usersFilteredList(res));
    } else {
      let res = filtrationList.filter((item) =>
        item.plan.toLowerCase().includes("premium")
      );
      dispatch(usersFilteredList(res));
    }
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
      <div className={`${hidden && styles.hideContainer}`}>
        <div
          className={`${styles.inputContainer} d-flex 
 
      `}
        >
          <i
            className={`fas fa-search  containerCenter`}
            value={searchValue}
          ></i>
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
                <div
                  className={`containerRow ${styles.premium} ${styles.mode}`}
                >
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
            <Dropdown onSelect={(e) => selectFunction(e)}>
              <Dropdown.Toggle
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

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Dropdown } from "react-bootstrap";
import {
  usersFilteredList,
  booksFilteredList,
  adminFilteredList,
} from "../../../redux/actions/superAction";
import { useDispatch, useSelector } from "react-redux";

function Header({
  hidden,
  title,
  filtrationList,
  allUsers,
  allAdmins,
  filtrationFree,
  from,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);
  const adminsDataSet = useSelector((state) => state.superAdmins.admins);
  const dispatch = useDispatch();

  const search = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();
      if (from === "SA view all users") {
        let results = allUsers.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.email.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(usersFilteredList(results));
      } else if (from === "SA books Array") {
        let results = filtrationList.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.author.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(booksFilteredList(results));
      }
      // if (adminsDataSet && adminsDataSet.length > 0) {
      //   let results = adminsDataSet.filter(
      //     (item) =>
      //       item.name.toLowerCase().includes(itemToFilter) ||
      //       item.email.toLowerCase().includes(itemToFilter)
      //   );
      //   dispatch(adminFilteredList(results));
      // }
    } else {
      // if (adminsDataSet && adminsDataSet.length > 0) {
      //   dispatch(adminFilteredList(adminsDataSet));
      // }
      if (from === "SA view all users") {
        dispatch(usersFilteredList(allUsers));
      } else {
        dispatch(booksFilteredList(filtrationList));
      }
    }
  };

  const clearInput = () => {
    // if (adminsDataSet && adminsDataSet.length > 0) {
    //   dispatch(adminFilteredList(adminsDataSet));
    // }
    setSearchValue("");
    if (from === "SA books Array") {
      dispatch(booksFilteredList(filtrationList));
    } else {
      dispatch(usersFilteredList(filtrationList));
    }
  };

  const cancelMode = () => {
    if (from === "SA books Array") {
      dispatch(booksFilteredList(filtrationList));
    } else if (from === "SA view all users") {
      dispatch(usersFilteredList(filtrationList));
    }
    setcurrentSelectValue("");
  };

  const selectFunction = (e) => {
    setcurrentSelectValue(e);
    if (from === "SA books Array") {
      if (e == "#/free") {
        let res = filtrationList.filter((item) =>
          item.plan.toLowerCase().includes("free")
        );
        dispatch(booksFilteredList(res));
      } else {
        let res = filtrationList.filter((item) =>
          item.plan.toLowerCase().includes("premium")
        );
        dispatch(booksFilteredList(res));
      }
    } else {
      if (e == "#/free") {
        let res = allUsers.filter((item) =>
          item.plan.toLowerCase().includes("free")
        );
        dispatch(usersFilteredList(res));
      } else {
        let res = allUsers.filter((item) =>
          item.plan.toLowerCase().includes("premium")
        );

        dispatch(usersFilteredList(res));
      }
    }
  };

  return (
    <div className={`containerRow ${styles.header}`}>
      <SideBar
        openSideBar={toggleSideMenu}
        show={toggleSideMenu}
        onHide={() => settoggleSideMenu(false)}
      />
      <div className={styles.headeritleContainer}>
        <p className={`display-6 `}>{title} </p>
      </div>
      <div className={`${styles.hideContainer}`}>
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
              onChange={(e) => {
                search(e);
              }}
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

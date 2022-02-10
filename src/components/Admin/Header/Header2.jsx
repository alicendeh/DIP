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
  to,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);
  const [nom, setNom] = useState(1);

  const dispatch = useDispatch();
  console.log(allAdmins);
  const search = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();
      let result = allUsers.filter(
        (item) =>
          item.name.toLowerCase().includes(itemToFilter) ||
          item.email.toLowerCase().includes(itemToFilter) ||
          item.plan.toLowerCase().includes(itemToFilter)
      );
      dispatch(usersFilteredList(result));

      if (from === "books Array") {
        console.log(filtrationList);

        let results = filtrationList.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.author.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(booksFilteredList(results));
      }
    } else {
      if (from === "books Array") {
        dispatch(booksFilteredList(filtrationList));
      } else {
        dispatch(usersFilteredList(filtrationList));
      }
    }
  };
  const search1 = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();
      let results = allAdmins.filter(
        (item) =>
          item.name.toLowerCase().includes(itemToFilter) ||
          item.email.toLowerCase().includes(itemToFilter) ||
          item.plan.toLowerCase().includes(itemToFilter),
        console.log("see")
      );
      dispatch(adminFilteredList(results));
    }
  };
  const clearInput = () => {
    setSearchValue("");
    if (from === "books Array") {
      dispatch(booksFilteredList(filtrationList));
      dispatch(usersFilteredList(filtrationList));
      dispatch(adminFilteredList(filtrationList));
    } else {
      dispatch(usersFilteredList(filtrationList));
    }
  };

  const cancelMode = () => {
    if (from === "books Array") {
      dispatch(booksFilteredList(filtrationList));
      dispatch(usersFilteredList(filtrationList));
    } else {
      dispatch(usersFilteredList(filtrationList));
      // dispatch(adminFilteredList(filtrationList));
    }
    setcurrentSelectValue("");
  };

  const selectFunction = (e) => {
    setcurrentSelectValue(e);
    if (e == "#/free") {
      let res = allUsers.filter((item) =>
        item.plan.toLowerCase().includes("free")
      );
      dispatch(usersFilteredList(res));
      console.log(res, "hey");
      dispatch(adminFilteredList(res));
    } else {
      let res = allUsers.filter((item) =>
        item.plan.toLowerCase().includes("premium")
      );
      dispatch(usersFilteredList(res));
      dispatch(adminFilteredList(res));
    }
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
                search1(e);
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

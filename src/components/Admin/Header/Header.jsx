// import React, { useState, useEffect } from "react";
// import styles from "./Header.module.css";
// import { Dropdown } from "react-bootstrap";
// import {
//   usersFilteredList,
//   booksFilteredList,
//   freeBooksFilteredList,
// } from "../../../redux/actions/adminAction";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Header({ hidden, title, filtrationList, filtrationFree, to, from }) {
//   const [searchValue, setSearchValue] = useState("");
//   const [currentSelectValue, setcurrentSelectValue] = useState("");
//   const [toggleSideMenu, settoggleSideMenu] = useState(false);

//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const search = (e) => {
//     setSearchValue(e.target.value);
//     let newText = e.target.value.toLowerCase();
//     if (newText !== "") {
//       let itemToFilter = newText.toLowerCase();

//       if (from === "all users") {
//         console.log("from all users");
//         let results = filtrationList.filter(
//           (item) =>
//             item.name.toLowerCase().includes(itemToFilter) ||
//             item.author.toLowerCase().includes(itemToFilter) ||
//             item.plan.toLowerCase().includes(itemToFilter)
//         );
//         dispatch(usersFilteredList(results));
//       }

//       if (from === "books Array") {
//         console.log("from books array");

//         let results = filtrationList.filter(
//           (item) =>
//             item.name.toLowerCase().includes(itemToFilter) ||
//             item.author.toLowerCase().includes(itemToFilter) ||
//             item.plan.toLowerCase().includes(itemToFilter)
//         );
//         dispatch(booksFilteredList(results));
//       }
//     }
//   };

//   const clearInput = () => {
//     setSearchValue("");
//     if (from === "books Array") {
//       dispatch(booksFilteredList(filtrationList));
//     } else {
//       dispatch(usersFilteredList(filtrationList));
//       dispatch(booksFilteredList(filtrationList));
//     }
//   };

//   const cancelMode = () => {
//     if (from === "books Array") {
//       dispatch(usersFilteredList(filtrationList));
//       dispatch(booksFilteredList(filtrationList));
//     } else {
//       dispatch(booksFilteredList(filtrationList));
//     }
//     setcurrentSelectValue("");
//   };

//   const selectFunction = (e) => {
//     setcurrentSelectValue(e);
//     if (from === "books Array") {
//       if (e == "#/free") {
//         let res = filtrationList.filter((item) =>
//           item.plan.toLowerCase().includes("free")
//         );
//         dispatch(usersFilteredList(res));
//       } else {
//         let res = filtrationList.filter((item) =>
//           item.plan.toLowerCase().includes("premium")
//         );
//         dispatch(usersFilteredList(res));
//       }
//     }
//     if (e == "#/free") {
//       let res = filtrationList.filter((item) =>
//         item.plan.toLowerCase().includes("free")
//       );
//       dispatch(booksFilteredList(res));
//     } else {
//       let res = filtrationList.filter((item) =>
//         item.plan.toLowerCase().includes("premium")
//       );
//       dispatch(booksFilteredList(res));
//     }

//     // if (from === "free books plan") {
//     //   if (user.user.plan == "free" && e == "#/free") {
//     //     let res = filtrationFree.filter((item) =>
//     //       item.plan.toLowerCase().includes("free")
//     //     );
//     //     dispatch(freeBooksFilteredList(res));
//     //   } else if (
//     //     user.user.plan == "free" &&
//     //     user.user.isRequestingAccess === false &&
//     //     e == "#/premium"
//     //   ) {
//     //     navigate("/upgradetopremium");
//     //   }
//     // }
//   };
//   return (
//     <div className={`containerRow ${styles.header}`}>
//       <SideBar
//         openSideBar={toggleSideMenu}
//         show={toggleSideMenu}
//         onHide={() => settoggleSideMenu(false)}
//       />
//       <div className={styles.headeritleContainer}>
//         <p className={`display-6 `}>{title} </p>
//         {/* <i
//           onClick={() => settoggleSideMenu(!toggleSideMenu)}
//           className={`fas fa-bars hide ${styles.menu}`}
//         ></i> */}
//       </div>
//       <div className={`${styles.hideContainer}`}>
//         <div
//           className={`${styles.inputContainer} d-flex

//       `}
//         >
//           <i
//             className={`fas fa-search  containerCenter`}
//             value={searchValue}
//           ></i>
//           {currentSelectValue.length > 0 ? (
//             <div className={`${styles.selectContainer} containerCenter`}>
//               {currentSelectValue === "#/free" ? (
//                 <div className={`${styles.free} ${styles.mode}`}>
//                   <span>free</span>
//                   <div className={styles.cancelFree}>
//                     <i
//                       onClick={cancelMode}
//                       className={`fas fa-times pr-3 d-flex-end  ${styles.cross}`}
//                     ></i>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   className={`containerRow ${styles.premium} ${styles.mode}`}
//                 >
//                   <span>Premium</span>
//                   <i
//                     onClick={cancelMode}
//                     className={`fas fa-times pr-3 d-flex-end  ${styles.cross}`}
//                   ></i>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <input
//               type="text"
//               value={searchValue}
//               onChange={(e) => {
//                 search(e);
//               }}
//               className={styles.input}
//               placeholder="Search..."
//             />
//           )}
//           {searchValue.length >= 1 ? (
//             <i
//               className={`fas fa-times pr-3 containerCenter  ${styles.cross}`}
//               onClick={clearInput}
//             ></i>
//           ) : (
//             <Dropdown onSelect={(e) => selectFunction(e)}>
//               <Dropdown.Toggle
//                 style={{
//                   fontSize: "25px",
//                   outline: "none",
//                 }}
//                 variant="white"
//                 id="dropdown-basic"
//               ></Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/free">Free </Dropdown.Item>
//                 <Dropdown.Item href="#/premium">Premium </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

// const SideBar = ({ openSideBar }) => {
//   return (
//     <div
//       className={
//         openSideBar ? `${styles.showSideMenu}` : `${styles.hideSideMenu}`
//       }
//     >
//       Alice Ndeh
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Dropdown } from "react-bootstrap";
import {
  usersFilteredList,
  booksFilteredList,
} from "../../../redux/actions/adminAction";
import { useDispatch } from "react-redux";

function Header({ hidden, title, filtrationList, from }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);

  const dispatch = useDispatch();

  const search = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();

      if (from === "books Array") {
        console.log(filtrationList);

        let results = filtrationList.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.author.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(booksFilteredList(results));
      } else {
        let result = filtrationList.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.email.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        console.log("sup", result);

        dispatch(usersFilteredList(result));
      }
    } else {
      if (from === "books Array") {
        dispatch(booksFilteredList(filtrationList));
      } else {
        dispatch(usersFilteredList(filtrationList));
      }
    }
  };
  const clearInput = () => {
    setSearchValue("");
    if (from === "books Array") {
      dispatch(booksFilteredList(filtrationList));
    }
    dispatch(usersFilteredList(filtrationList));
  };

  const cancelMode = () => {
    if (from === "books Array") {
      dispatch(booksFilteredList(filtrationList));
      dispatch(usersFilteredList(filtrationList));
    } else {
      dispatch(usersFilteredList(filtrationList));
    }
    setcurrentSelectValue("");
  };

  const selectFunction = (e) => {
    setcurrentSelectValue(e);
    if (from === "books Array") {
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
    }
  };

  // if (from === "free books plan") {
  //   if (user.user.plan == "free" && e == "#/free") {
  //     let res = filtrationFree.filter((item) =>
  //       item.plan.toLowerCase().includes("free")
  //     );
  //     dispatch(freeBooksFilteredList(res));
  //   } else if (
  //     user.user.plan == "free" &&
  //     user.user.isRequestingAccess === false &&
  //     e == "#/premium"
  //   ) {
  //     navigate("/upgradetopremium");
  //   }
  // }
  // };
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

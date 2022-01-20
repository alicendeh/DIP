import React, { useState, useEffect } from "react";
import styles from "./LeftNavigationBar.module.css";
import { ICON_DATA_SET } from "../../../DATA";
import { Link } from "react-router-dom";

function LeftNavigationBar() {
  const [iconDataSet, setIconDataSet] = useState([]);
  const [prevActive, setPrevActive] = useState();

  useEffect(() => {
    setIconDataSet([...ICON_DATA_SET]);
    setPrevActive(0);
  }, []);

  //set active item
  const changeView = (index) => {
    let newArray = [...iconDataSet];

    newArray[prevActive] = {
      ...newArray[prevActive],
      isActive: false,
    };

    newArray[index] = {
      ...newArray[index],
      isActive: true,
    };
    setIconDataSet([...newArray]);
    setPrevActive(index);
  };

  return (
    <div className={`containerColumn ${styles.container}`}>
      <div>
        <img src="/logo_without_bg.png" width="90" alt="logo" />
      </div>
      <div className={`containerColumn ${styles.iconContainer}`}>
        {iconDataSet.map((icon, index) => (
          <Link to={icon.path}>
            <i
              key={icon.name}
              onClick={() => changeView(index)}
              className={`icon ${icon.name}  ${
                icon.isActive ? `${styles.isActive}` : `${styles.notActive}`
              }`}
            ></i>
          </Link>
        ))}
      </div>
      <div>
        <i className={`fas fa-sign-out-alt fa-2x ${styles.logout} icon`}></i>
      </div>
    </div>
  );
}

export default LeftNavigationBar;

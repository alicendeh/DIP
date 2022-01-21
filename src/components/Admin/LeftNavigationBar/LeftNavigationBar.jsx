import React, { useState, useEffect } from "react";
import styles from "./LeftNavigationBar.module.css";
import { ICON_DATA_SET } from "../../../DATA";
import { Link, useLocation } from "react-router-dom";

function LeftNavigationBar() {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  return (
    <div className={`containerColumn ${styles.container}`}>
      <div>
        <img src="/logo_without_bg.png" width="90" alt="logo" />
      </div>
      <div className={`containerColumn ${styles.iconContainer}`}>
        {ICON_DATA_SET.map((icon, index) => (
          <Link to={icon.path} key={icon.name}>
            <i
              className={`icon ${icon.name}  ${
                icon.path === currentPath
                  ? `${styles.isActive}`
                  : `${styles.notActive}`
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

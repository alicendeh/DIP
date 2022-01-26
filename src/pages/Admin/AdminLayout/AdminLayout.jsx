import React, { useState, useEffect } from "react";
import styles from "./AdminLayout.module.css";
import {
  LeftNavigationBar,
  RightStatisticsSection,
  Unexpected,
} from "../../../components";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  // const location = useLocation();
  // let possiblePaths = Array("/books", "/users", "/upload", "/profile");
  // const [currentPath, setCurrentPath] = useState("");

  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, []);
  // useEffect(() => {
  //   let res = possiblePaths.includes(location.pathname);
  //   if (res == false) {
  //     console.log("false");
  //     window.location.replace(currentPath);
  //   }
  // }, [location.pathname]);

  const admin = useSelector((state) => state.admin);
  const { error } = admin;
  return (
    <div>
      {error !== null ? (
        <Unexpected />
      ) : (
        <div className={`${styles.container}`}>
          <LeftNavigationBar />
          <div className={styles.children}>{children}</div>
          <RightStatisticsSection />
        </div>
      )}
    </div>
  );
}

export default AdminLayout;

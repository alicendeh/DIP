import React from "react";
import styles from "./LeftNavigationBar.module.css";

function LeftNavigationBar() {
  return (
    <div className={`containerColumn ${styles.container}`}>
      <div>
        <img src="/logo_without_bg.png" width="90" alt="logo" />
      </div>
      <div>hey</div>
      <div>alicendeh</div>
    </div>
  );
}

export default LeftNavigationBar;

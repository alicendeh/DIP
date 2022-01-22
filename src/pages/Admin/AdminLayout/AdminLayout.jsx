import React, { useState } from "react";
import styles from "./AdminLayout.module.css";
import { LeftNavigationBar, RightStatisticsSection } from "../../../components";

function AdminLayout({ children }) {
  const [slide, setslide] = useState(false);

  return (
    <div
      className={`${styles.container} ss 
    ${slide ? `${styles.shouldSlide}` : `${styles.hideSlide}`}
    `}
    >
      <LeftNavigationBar />
      <div className={styles.children}>{children}</div>
      <RightStatisticsSection />
    </div>
  );
}

export default AdminLayout;

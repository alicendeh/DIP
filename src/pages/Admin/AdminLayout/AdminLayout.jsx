import React from "react";
import styles from "./AdminLayout.module.css";
import { LeftNavigationBar, RightStatisticsSection } from "../../../components";

function AdminLayout({ children }) {
  return (
    <div className={styles.container}>
      <LeftNavigationBar />
      <div className={styles.children}>{children}</div>
      <RightStatisticsSection />
    </div>
  );
}

export default AdminLayout;

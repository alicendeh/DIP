import React from "react";
import styles from "./AdminLayout";
import { LeftNavigationBar, RightStatisticsSection } from "../../../components";

function AdminLayout({ children }) {
  return (
    <div>
      <LeftNavigationBar />
      {children}
      <RightStatisticsSection />
    </div>
  );
}

export default AdminLayout;

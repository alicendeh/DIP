// import React, { useState } from "react";
// import styles from "./AdminLayout.module.css";
// import { LeftNavigationBar, RightStatisticsSection } from "../../../components";

// function AdminLayout({ children }) {
//   const [slide, setslide] = useState(false);

//   return (
//     <div
//       className={`${styles.container} ss
//     ${slide ? `${styles.shouldSlide}` : `${styles.hideSlide}`}
//     `}
//     >
//       <LeftNavigationBar />
//       <div className={styles.children}>{children}</div>
//       <RightStatisticsSection />
//     </div>
//   );
// }

// export default AdminLayout;

import React, { useState } from "react";
import styles from "./AdminLayout.module.css";
import {
  LeftNavigationBar,
  RightStatisticsSection,
  Unexpected,
} from "../../../components";
import { useSelector } from "react-redux";

function AdminLayout({ children }) {
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

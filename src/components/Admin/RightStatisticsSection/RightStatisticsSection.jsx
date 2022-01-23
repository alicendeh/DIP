import React, { useEffect } from "react";
import styles from "./RightStatisticsSection.module.css";
import { Avater } from "../../../components";
import { STATISTICS_DATA, COLOR_ARRAY } from "../../../DATA";
import { adminGetsStatisticsData } from "../../../redux/actions/adminAction";

function RightStatisticsSection() {
  useEffect(() => {
    getAllStatisticsInformation();
  }, []);
  const getAllStatisticsInformation = async () => {};
  return (
    <div className={`${styles.container}`}>
      <div>
        <div className={`containerCenter d-flex justify-content-end `}>
          <p className="pt-3 pr-3 ">
            hi,
            <span className="font-weight-bold"> Alice Ndeh</span>
          </p>
          <Avater imageUrl={"/cld-sample.jpg"} />
        </div>
        <div className={styles.overViewC0ntainer}>
          <p>OverView</p>
          <div className={`containerRow ${styles.totalContainer}`}>
            <div
              className={`containerColumn ${styles.total} ${styles.totalBooks} `}
            >
              <p>75</p>
              <p>Books</p>
            </div>
            <div
              className={`containerColumn ${styles.total} ${styles.totalViews} `}
            >
              <p>125</p>
              <p>Views</p>
            </div>
          </div>
          <div className="pt-4">
            {STATISTICS_DATA.map((statistic, index) => (
              <div key={index} className={`pt-4 ${styles.stats}`}>
                <div className={`containerRow`}>
                  <p>{statistic.label} </p>
                  <p>
                    {statistic.val}/ {statistic.total}{" "}
                  </p>
                </div>
                <div className={styles.main}>
                  <div
                    style={{
                      backgroundColor: COLOR_ARRAY[index],
                      width: `${statistic.val}%`,
                      height: "100%",
                      borderRadius: "7px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightStatisticsSection;

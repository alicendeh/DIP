import React, { useEffect, useState } from "react";
import styles from "./RightStatisticsSection.module.css";
import { Avater } from "../../../components";
import { COLOR_ARRAY } from "../../../DATA";
import {
  adminGetsStatisticsData,
  loadingState,
  errorDetected,
} from "../../../redux/actions/adminAction";
import { loadUser } from "../../../redux/actions/userAction";
import { _getAllStatistics } from "../../../Helpers/adminHelper";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import { useDispatch, useSelector } from "react-redux";

function RightStatisticsSection() {
  const statisticsData = useSelector((state) => state.admin.statisticsData);
  const loading = useSelector((state) => state.admin.loading);
  const userData = useSelector((state) => state.user);
  const [views, setViews] = useState(null);

  const { user } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _getAllStatistics().then((response) => {
      if (response.code === 400) {
        return dispatch(errorDetected(response.errorMessage));
      } else {
        dispatch(adminGetsStatisticsData(response.statistic));
        setViews(response.views.data.totalViews);
        console.log(response.statistic);
      }
    });
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div>
        <div className={`containerCenter d-flex justify-content-end `}>
          <p className="pt-3 pr-3 ">
            hi,
            <span className="font-weight-bold"> {user && user.name}</span>
          </p>
          <Avater
            imageUrl={
              user && user.avater !== "" ? user.avater : "/defaultUserPic.webp"
            }
          />
        </div>
        <div className={styles.overViewC0ntainer}>
          <p>OverView</p>
          <div className={`containerRow ${styles.totalContainer}`}>
            <div
              className={`containerColumn ${styles.total} ${styles.totalBooks} `}
            >
              <p> {statisticsData[0] && statisticsData[0].value} </p>
              <p>Books</p>
            </div>
            <div
              className={`containerColumn ${styles.total} ${styles.totalViews} `}
            >
              <p>{views && views} </p>
              <p>Views</p>
            </div>
          </div>
          <div className="pt-4">
            {loading ? (
              <div className={`containerCenter spinnerContainer`}>
                <div className="spinner"></div>
              </div>
            ) : (
              <div>
                {statisticsData &&
                  statisticsData.map((statistic, index) => (
                    <div>
                      {index === 0 ? null : (
                        <div key={index} className={`pt-4 ${styles.stats}`}>
                          <div className={`containerRow`}>
                            <p>{statistic.label} </p>
                            <p>
                              {statistic.value}/ {statisticsData[1].value}
                            </p>
                          </div>
                          <div className={styles.main}>
                            <div
                              style={{
                                backgroundColor: COLOR_ARRAY[index],
                                width: `${statistic.value}px`,
                                height: "100%",
                                borderRadius: "7px",
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightStatisticsSection;

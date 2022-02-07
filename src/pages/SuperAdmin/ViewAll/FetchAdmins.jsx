import React, { useState, useEffect } from "react";
import { _getAllAdmins } from "../../../Helpers/superAdminHelper";
import {
  superadminGetsAdmin,
  loadingState,
  errorDetected,
} from "../../../redux/actions/superAction";
import { useSelector, useDispatch } from "react-redux";
import { Header, PendingCard, PlanCard, Unexpected } from "../../../components";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import { loadUser } from "../../../redux/actions/userAction";
import Lottie from "react-lottie";
import animationData from "../../../annimations/89683-user-reviews.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function FetchAdmins() {
  const usersData = useSelector((state) => state.superAdmins);
  const { incomingUsersRequest, admins, loading, usersFilteredList } =
    usersData;

  const [pendinDataSet, setpendinDataSet] = useState([]);
  const [userDataSet, setuserDataSet] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));

    _getAllAdmins().then((data) => {
      if (data.code === 400) {
        return dispatch(errorDetected(data.errorMessage));
      } else {
        dispatch(superadminGetsAdmin(data));
      }
    });
  }, []);

  useEffect(() => {
    if (usersFilteredList.length > 0) {
      let users = usersFilteredList.filter(
        (item) => item.isRequestingAccess === false
      );
      setuserDataSet(users);

      let pending = usersFilteredList.filter(
        (item) => item.isRequestingAccess === true
      );
      console.log(pending, "pending`");

      setpendinDataSet(pending);
    }
  }, [usersFilteredList]);

  return (
    <div>
      {loading ? (
        <div className={`containerCenter spinnerContainer`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {admins.length > 0 || incomingUsersRequest.length > 0 ? (
            <div>
              {usersFilteredList.length > 0 ? (
                <div>
                  <div>
                    {pendinDataSet.length > 0 &&
                      pendinDataSet.map((user, index) => (
                        <div key={index}>
                          <PendingCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                  <div>
                    {userDataSet.length > 0 &&
                      userDataSet.map((user, index) => (
                        <div key={index}>
                          <PlanCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div>
                  {typeof admins !== undefined &&
                    admins.length > 0 &&
                    admins.map((user, index) => (
                      <div key={index}>
                        <PlanCard user={user} />
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div className="containerColumn fw-bold ">
              <Lottie options={defaultOptions} height={400} width={"70%"} />
              <p
                style={{
                  fontSize: 21,
                }}
              >
                All Users will appear hear
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FetchAdmins;

import React, { useState, useEffect } from "react";
import styles from "./ViewAdminsUsers.module.css";
import { Route } from "react-router-dom";
import FetchAdmins from "./FetchAdmins";
import FetchUses from "./FetchUses";
import { Nav } from "react-bootstrap";
import { SuperAdminLayout } from "../..";
import {
  Header,
  Header2,
  PendingCard,
  PlanCard,
  Unexpected,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  adminGetsUsersequest,
  adminGetsAllUsers,
  loadingState,
  errorDetected,
} from "../../../redux/actions/superAction";
import Lottie from "react-lottie";
import animationData from "../../../annimations/89683-user-reviews.json";
import {
  _getPlanChangeRequests,
  _getAllUsers,
} from "../../../Helpers/adminHelper";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import { loadUser } from "../../../redux/actions/userAction";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function ViewAdminsUsers() {
  const usersData = useSelector((state) => state.superAdmins);
  // const data = useSelector((state) => state.admin);
  // const { error, allBooks, allFreeBooks, loading, booksFilteredList } =
  //   usersData;
  const {
    incomingUsersRequest,
    allBooks,
    allFreeBooks,
    users,
    admins,
    loading,
    usersFilteredList,
  } = usersData;
  console.log(admins, "hey");
  const [pendinDataSet, setpendinDataSet] = useState([]);
  const [userDataSet, setuserDataSet] = useState([]);

  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(true);
  }, []);

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _getPlanChangeRequests().then((data) => {
      if (data.code === 400) {
        return dispatch(errorDetected(data.errorMessage));
      } else {
        dispatch(adminGetsUsersequest(data));
      }
    });
    _getAllUsers().then((data) => {
      if (data.code === 400) {
        return dispatch(errorDetected(data.errorMessage));
      } else {
        dispatch(adminGetsAllUsers(data));
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
      // console.log(pending, "pending`");

      setpendinDataSet(pending);
    }
  }, [usersFilteredList]);

  return (
    <SuperAdminLayout>
      {/* <Header
        title={"Admins & Users"}
        filtrationList={allBooks}
        filtrationFree={allFreeBooks}
        from={"books Array"}
        // to={"books Array"}
      /> */}
      <Header2
        title={"Admins & Users"}
        filtrationList={allBooks}
        allUsers={users}
        allAdmins={admins}
        from={"books Array"}
        to={"Admins"}
      />
      <Nav justify variant="tabs" defaultActiveKey="/all-admins-users">
        <Nav.Item>
          <Nav.Link onClick={() => setToggle(true)}>All Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setToggle(false)}>Admins</Nav.Link>
        </Nav.Item>
      </Nav>
      {toggle ? <FetchUses /> : <FetchAdmins />}
    </SuperAdminLayout>
  );
}

export default ViewAdminsUsers;

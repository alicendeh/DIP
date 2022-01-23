import React, { useState, useEffect } from "react";
import { AdminLayout } from "../../../pages";
import { Header, PendingCard, PlanCard } from "../../../components";
import { PENDING_USERS, CONFIREMED_USERS } from "../../../DATA";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  adminGetsUsersequest,
  adminGetsAllUsers,
} from "../../../redux/actions/adminAction";
import {
  _getPlanChangeRequests,
  _getAllUsers,
} from "../../../Helpers/adminHelper";

function AllUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    _getPlanChangeRequests().then((data) =>
      dispatch(adminGetsUsersequest(data))
    );
    _getAllUsers().then((data) => dispatch(adminGetsAllUsers(data)));
  }, []);

  return (
    <AdminLayout>
      <Header title={"Users"} />
      <div>
        {PENDING_USERS.map((user, index) => (
          <div key={index}>
            <PendingCard user={user} index={index} />
          </div>
        ))}
      </div>
      <div>
        {CONFIREMED_USERS.map((user, index) => (
          <div key={index}>
            <PlanCard user={user} />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default AllUsers;

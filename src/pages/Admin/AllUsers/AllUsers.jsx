import React, { useState, useEffect } from "react";
import { AdminLayout } from "../../../pages";
import { Header, PendingCard, PlanCard } from "../../../components";
import { PENDING_USERS, CONFIREMED_USERS } from "../../../DATA";
import { useSelector, useDispatch } from "react-redux";
import { adminGetsUsersequest } from "../../../redux/actions/adminAction";
import axios from "axios";

function AllUsers() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZDFjNzdlN2VmNzc2ZWJmMDIwMWVmIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNjQyOTI5MjcxLCJleHAiOjE2NDI5NjUyNzF9.ZWnWv1XwM5fNKrjmzKMsdNZgdyPdw30HyMPwWtLFpqs";

  const config = {
    headers: {
      "dip-token": token,
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getPlanChangeRequest();
    console.log(process.env.REACT_APP_URL, "hee");
  }, []);

  const getPlanChangeRequest = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}`);
      dispatch(adminGetsUsersequest(res.data));
    } catch (err) {
      console.log(err, "error here");
    }
  };

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

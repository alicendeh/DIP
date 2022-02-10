import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminCard from "./AdminCard";
import { superadminGetsAdmin } from "../../../redux/actions/superAction";
import { _getAllAdmins } from "../../../Helpers/adminHelper";
import { useDispatch, useSelector } from "react-redux";

function FetchAdmins() {
  const [data, setData] = useState([]);
  const usersData = useSelector((state) => state.superAdmins);
  const { incomingUsersRequest, admins, loading, adminFilteredList } =
    usersData;
  const dispatch = useDispatch();
  useEffect(() => {
    _getAllAdmins().then((data) => {
      setData(data.admins);
      console.log(data, "mn");
      return dispatch(superadminGetsAdmin(data));
    });
  }, []);
  console.log(adminFilteredList);
  console.log(admins);
  return (
    <div>
      {adminFilteredList.map((user, index) => (
        <div key={index}>
          <AdminCard user={user} />
        </div>
      ))}
      <div>{data && data.map((data) => <AdminCard user={data} />)}</div>
    </div>
  );
}

export default FetchAdmins;

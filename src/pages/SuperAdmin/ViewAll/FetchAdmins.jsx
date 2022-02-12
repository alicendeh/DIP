import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminCard from "./AdminCard";
import { superadminGetsAdmin } from "../../../redux/actions/superAction";
import { _getAllAdmins } from "../../../Helpers/adminHelper";
import { useDispatch, useSelector } from "react-redux";

function FetchAdmins() {
  const [data, setData] = useState([]);
  const usersData = useSelector((state) => state.superAdmins);
  const [loading, setloading] = useState(false);

  const { adminFilteredList } = usersData;
  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    _getAllAdmins().then((data) => {
      setData(data.admins);
      setloading(false);
      return dispatch(superadminGetsAdmin(data));
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className={`containerCenter spinnerContainer`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {adminFilteredList && adminFilteredList.length > 0 ? (
            <div>
              {adminFilteredList.map((user, index) => (
                <div key={index}>
                  <AdminCard user={user} />
                </div>
              ))}
            </div>
          ) : (
            <div>{data && data.map((data) => <AdminCard user={data} />)}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default FetchAdmins;

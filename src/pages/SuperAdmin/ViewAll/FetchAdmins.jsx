import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminCard from "./AdminCard";
import { _getAllAdmins } from "../../../Helpers/adminHelper";

function FetchAdmins() {
  const [data, setData] = useState([]);

  useEffect(() => {
    _getAllAdmins().then((data) => {
      setData(data.admins);

      console.log(data, "mn");
    });
  }, []);

  return <div>{data && data.map((data) => <AdminCard user={data} />)}</div>;
}

export default FetchAdmins;

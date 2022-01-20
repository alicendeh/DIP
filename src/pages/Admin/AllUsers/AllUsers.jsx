import React from "react";
import styles from "./AllUsers";
import { AdminLayout } from "../../../pages";

function AllUsers() {
  return (
    <AdminLayout>
      all users
      <div
        style={
          {
            // backgroundColor: "red",
            // height: "45vh",
            // fontSize: 99,
          }
        }
      >
        hey
      </div>
      <div
        style={{
          backgroundColor: "green",
          // width: "0%",
        }}
      >
        sup
      </div>
    </AdminLayout>
  );
}

export default AllUsers;

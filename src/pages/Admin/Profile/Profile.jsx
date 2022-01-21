import React from "react";
import styles from "./Profile.module.css";
import { AdminLayout } from "../../../pages";
import { Header } from "../../../components";

function Profile() {
  return (
    <AdminLayout>
      <Header title={"Profile"} hidden />
    </AdminLayout>
  );
}

export default Profile;

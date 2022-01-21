import React from "react";
import styles from "./Upload.module.css";
import { AdminLayout } from "../..";
import { Header } from "../../../components";

function Upload() {
  return (
    <AdminLayout>
      <Header title={"Upload"} hidden />
    </AdminLayout>
  );
}

export default Upload;

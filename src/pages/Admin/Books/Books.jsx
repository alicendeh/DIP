import React from "react";
import styles from "./Books.module.css";
import { AdminLayout } from "../../../pages";
import { Header } from "../../../components";

function Books() {
  return (
    <AdminLayout>
      <Header title={"Books"} />
    </AdminLayout>
  );
}

export default Books;

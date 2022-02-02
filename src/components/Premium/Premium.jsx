import React from "react";
import { MyFree } from "../../components";
import BooksCard from "../../components/BookxCard/BooksCard";
import styles from "./Premium.module.css";
function Premium() {
  return (
    <MyFree>
      <div className={`${styles.all} row pt-3 pb-5 flex-lg-wrap`}>
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard />
      </div>
    </MyFree>
  );
  // return <h1>Hello</h1>;
}

export default Premium;

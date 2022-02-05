import React from "react";
import { MyFree } from "../../components";
import BooksCard from "../../components/BookxCard/BooksCard";
import styles from "./AccessToFree.module.css";

function AccessToFree() {
  return (
    <MyFree>
      <div className={`${styles.all} row pt-3 pb-5 flex-lg-wrap`}>
        {/* <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard /> */}
      </div>
    </MyFree>
  );
}

export default AccessToFree;

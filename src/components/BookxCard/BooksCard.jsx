import React from "react";
import styles from "./BooksCard.module.css";
function BooksCard() {
  return (
    <div className="col-md-4 ">
      <div className={`${styles.card} p-3 mb-2 `}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className={`${styles.icon} `}>
              {" "}
              {/* <i className="bx bxl-mailchimp"></i>{" "} */}
            </div>
            <div className={`${styles.details} ms-2 `}>
              <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
            </div>
          </div>
          <div className={`${styles.badge} ms-2 `}>
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">
            Senior Product
            <br />
            Designer-Singapore
          </h3>
          <div className="mt-5">
            <div className={`${styles.progress} ms-2 `}>
              <div
                className={`${styles.progress} ms-2 `}
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="mt-3">
              {" "}
              <span className={`${styles.text1} ms-2 `}>
                32 Applied{" "}
                <span className={`${styles.text2} ms-2 `}>of 50 capacity</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;

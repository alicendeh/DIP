import React, { useState, useEffect } from "react";
import styles from "./Registeration.module.css";
import { Link } from "react-router-dom";

function Registeration() {
  const [put, setPut] = useState(false);
  const [put1, setPut1] = useState(false);
  const [validated, setValidated] = useState(false);
  const handlePut = () => {
    setPut(!put);
    setPut1(!put1);
  };
  const handlePut1 = () => {
    setPut1(!put1);
  };

  return (
    <div className={`${styles.main}`}>
      <div className={styles.box}>
        <div className={`${styles.secondPart} col-lg-6`}>
          <div className="text-left pt-3 px-4">
            <h2 style={{ fontSize: "3em", color: "#281766" }}>SignUp</h2>
          </div>
          <div className="container">
            <div className="sap d-flex">
              <div className={`${styles.line} mt-4 ml-2`}></div>
              <p
                className=" mt-2 ml-2"
                style={{ color: "#bb2d00", fontWeight: "bold" }}
              >
                sign Up with
              </p>
            </div>
            <div className="formsap row d-flex justify-content-center align-items-center">
              <form class="row g-3 m-0 ">
                <div className="col-md-6">
                  <label for="validationCustom01" class="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className={`${styles.int} form-control`}
                    id="validationCustom01"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${styles.int} form-control`}
                    id="inputEmail4"
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Sponor's Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.int} form-control`}
                    id="inputEmail4"
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Upline Leader's Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.int} form-control`}
                    id="inputEmail4"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <div
                    className="inputPass"
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        borderStyle: "none",
                      }}
                      type={put1 ? "text" : "password"}
                      className="form-control"
                      id="inputPassword4"
                    />

                    <i
                      class={put1 ? "far fa-eye mr-2" : "fas fa-eye-slash mr-2"}
                      style={{ color: "#ccc", cursor: "pointer" }}
                      onClick={handlePut1}
                    ></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Confirm Password
                  </label>
                  <div
                    className="inputPass"
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        borderStyle: "none",
                      }}
                      type={put ? "text" : "password"}
                      className="form-control"
                      id="inputPassword4"
                    />

                    <i
                      class={put ? "far fa-eye mr-2" : "fas fa-eye-slash mr-2"}
                      style={{ color: "#ccc", cursor: "pointer" }}
                      onClick={handlePut}
                    ></i>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" className="col-12 btn btn-primary ">
                    Sign in
                  </button>
                </div>
                <div className="text-muted d-flex justify-content-center align-items-center">
                  <small style={{ color: "#bb2d00" }}>
                    Already have an account click on the arrow or{" "}
                    <Link to="/login">Sigin</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={`${styles.firstPart} col-lg-6`}>
          <div className={styles.part}>
            <img
              src="/5.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <h4 style={{ textAlign: "center", color: "white" }}>
              Reading at your Pace
            </h4>
            <p
              className="py-2"
              style={{
                fontSize: "12px",
                color: "white",
                textAlign: "center",
              }}
            >
              A full customised plateform where you can read and get free or
              premium plan{" "}
            </p>
            <div
              className={`${styles.look} py-2 d-flex justify-content-center align-items-center`}
            >
              <div
                className={`${styles.circle} d-flex justify-content-center align-items-center`}
              >
                <i class="fas fa-arrow-right" style={{ fontSize: "20px" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registeration;

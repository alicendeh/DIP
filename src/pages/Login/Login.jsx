import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.box}>
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
              style={{ fontSize: "12px", color: "white", textAlign: "center" }}
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
                <i class="fas fa-arrow-left" style={{ fontSize: "20px" }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.secondPart} col-lg-6`}>
          <div className="text-left pt-3 px-4">
            <h2 style={{ fontSize: "3em", color: "#281766" }}>Signin</h2>
          </div>
          <div className="container">
            <div className="sap d-flex">
              <div className={`${styles.line} mt-4 ml-2`}></div>
              <p
                className=" mt-2 ml-2"
                style={{ color: "#bb2d00", fontWeight: "bold" }}
              >
                sign In with
              </p>
            </div>
            <div className="formsap row d-flex justify-content-center align-items-center">
              <form class="row g-3">
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`${styles.int} form-control`}
                    id="inputEmail4"
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-12">
                  <button type="submit" className="col-12 btn btn-primary ">
                    Sign in
                  </button>
                </div>
                <div className="text-muted d-flex justify-content-center align-items-center">
                  <small style={{ color: "#bb2d00" }}>
                    Don't have an account click on the arrow or{" "}
                    <Link to="/signup">Signup</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

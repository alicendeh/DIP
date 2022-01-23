import React, { useState, useEffect } from "react";
import styles from "./Registeration.module.css";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../redux/actions/authUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { registerUsers } from "../../redux/actions/authUser";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header className="mheader" closeButton>
        <div className="contain" style={{ width: "80px", height: "80px" }}>
          <img src="/8.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      </Modal.Header> */}
      <Modal.Body>
        <div className="containt d-flex">
          <h4>Request sent and Pending</h4>{" "}
          <i
            class="fas fa-check-double pt-2 pl-2"
            style={{ color: "#009717" }}
          ></i>
        </div>
        <p>
          Request Sent, But you need to wait for the Admin to grant you access!
          For you to enjoy the free Plan!
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Registeration({ isAuthenticated, register }) {
  const dispatch = useDispatch();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [toggleEyePassword, setToggleEyePassword] = useState(false);
  const [toggleEyePassword1, setToggleEyePassword1] = useState(false);
  const [validationPassword, setValidationPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sponsorName: "",
    leadersName: "",
    password: "",
    password2: "",
  });
  const handletoggleEyePassword = () => {
    setToggleEyePassword(!toggleEyePassword);
  };
  const handletoggleEyePassword1 = () => {
    setToggleEyePassword1(!toggleEyePassword1);
  };
  const { name, email, sponsorName, leadersName, password, password2 } =
    formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setValidationPassword(true);
    } else {
      const data = { name, email, sponsorName, leadersName, password };

      // register({ name, email, sponsorName, leadersName, password });
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/users/CreateAccount`,
        data,
        config
      );
    }
  };

  // if (isAuthenticated) {
  //   setTimeout(() => {
  //     return (
  //       <MyVerticallyCenteredModal
  //         show={setModalShow(true)}
  //         onHide={() => setModalShow(false)}
  //       />
  //     );
  //   }, 1000);
  // }
  // <Navigate/ to="/dashboard" />;

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
              <form class="row g-3 m-0 " onSubmit={(e) => onsubmit(e)}>
                <div className="col-md-6">
                  <label for="validationCustom01" class="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className={`${styles.int} form-control`}
                    id="validationCustom01"
                    name="name"
                    value={name}
                    onChange={(e) => onchange(e)}
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
                    name="email"
                    value={email}
                    onChange={(e) => onchange(e)}
                    required
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
                    name="sponsorName"
                    value={sponsorName}
                    onChange={(e) => onchange(e)}
                    required
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
                    name="leadersName"
                    value={leadersName}
                    onChange={(e) => onchange(e)}
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <div
                    className="inputPass "
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      border: validationPassword
                        ? "1px solid red"
                        : "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        borderStyle: "none",
                      }}
                      type={toggleEyePassword1 ? "text" : "password"}
                      className="form-control"
                      id="inputPassword4"
                      name="password"
                      value={password}
                      onChange={(e) => onchange(e)}
                      required
                    />

                    <i
                      class={
                        toggleEyePassword1
                          ? "far fa-eye mr-2"
                          : "fas fa-eye-slash mr-2"
                      }
                      style={{ color: "#ccc", cursor: "pointer" }}
                      onClick={handletoggleEyePassword1}
                    ></i>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <label for="inputPassword4" className="form-label">
                    Confirm Password
                  </label>
                  <div
                    className="inputPass "
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      border: validationPassword
                        ? "1px solid red"
                        : "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        borderStyle: "none",
                      }}
                      type={toggleEyePassword ? "text" : "password"}
                      className="form-control"
                      id="inputPassword4"
                      name="password2"
                      value={password2}
                      onChange={(e) => onchange(e)}
                      required
                    />

                    <i
                      class={
                        toggleEyePassword
                          ? "far fa-eye mr-2"
                          : "fas fa-eye-slash mr-2"
                      }
                      style={{ color: "#ccc", cursor: "pointer" }}
                      onClick={handletoggleEyePassword}
                    ></i>
                  </div>
                  <span
                    style={{ display: validationPassword ? "block" : "none" }}
                  >
                    {" "}
                    <p
                      className="m-0 p-0"
                      style={{ color: "red", fontSize: "11px" }}
                    >
                      Password Does Not Match
                    </p>{" "}
                  </span>
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
// Registeration.propTypes = {
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };
// const mapToProps = (state) => ({
//   // isAuthenticated: state.auth.isAuthenticated,
// });
export default Registeration;

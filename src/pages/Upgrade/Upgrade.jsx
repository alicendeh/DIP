import React, { useEffect, useState } from "react";
import { DashPage } from "../../components";
import styles from "./Upgrade.module.css";
import { Modal, Button } from "react-bootstrap";
import { loadUser } from "../../redux/actions/userAction";
import {
  _loadeCurrentlyLogedInUser,
  _userRequestPremiumPlan,
} from "../../Helpers/userHelper";
import { useDispatch, useSelector } from "react-redux";
import PendingView from "../PendingView/PendingView";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          className="pend"
          style={{
            // width: "100vw",
            // height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            className="view"
            style={{
              width: "40%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src="./rejection.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <h3 style={{ textAlign: "center", color: "grey" }}>
              Sorry, Your Request was rejected
            </h3>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div
          className="btn btn-danger"
          onClick={() => {
            localStorage.removeItem("I_REQUESTED");
            props.close(false);
          }}
        >
          close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function SentModal(props) {
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
function Upgrade() {
  const [requestedAccess, setrequestedAccess] = useState(null);

  useEffect(() => {
    _loadeCurrentlyLogedInUser().then((data) => {
      dispatch(loadUser(data));
    });
    let checkAcessRequest = localStorage.getItem("I_REQUESTED");
    setrequestedAccess(checkAcessRequest);
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [showRejectionModal, setshowRejectionModal] = useState(true);

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const sendPremiumUpgrade = () => {
    _userRequestPremiumPlan().then((response) => {
      _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
      localStorage.setItem("I_REQUESTED", true);
    });
  };

  return (
    <div>
      {user && requestedAccess && user.isRequestingAccess === false && (
        <MyVerticallyCenteredModal
          show={showRejectionModal}
          close={setshowRejectionModal}
        />
      )}
      {user && user.isRequestingAccess === false && user.plan === "free" && (
        <DashPage>
          <div className="pt-5 pb-5 ">
            <div
              className="containerCenter col-lg-12 col-md-12 col-sm-12 px-2 py-2"
              style={{ borderRadius: "10px", border: "3px solid #005FB0" }}
            >
              <div className="text-center pt-3">
                <h1 style={{ color: " #008514" }}>PREMIUM</h1>
                <h4 style={{ color: "#0360AF" }}>PLAN</h4>
                <div className="pt-2">
                  <div
                    className={`${styles.plan1}  d-flex justify-content-center`}
                    style={{ gap: "10px" }}
                  >
                    <i
                      class="fas fa-check-circle pt-1"
                      style={{ color: "#747170" }}
                    ></i>
                    <p>
                      The next generation of the web's favorite icon library +
                      toolkit is now available as a Beta release! Try out the
                      Free version
                    </p>
                  </div>
                  <div
                    className="plan-1 d-flex justify-content-center"
                    style={{ gap: "10px" }}
                  >
                    <i
                      class="fas fa-check-circle pt-1"
                      style={{ color: "#747170" }}
                    ></i>
                    <p>
                      The next generation of the web's favorite icon library +
                      toolkit is now available as a Beta release! Try out the
                      Free version
                    </p>
                  </div>
                  <div
                    className="plan-1 d-flex justify-content-center"
                    style={{ gap: "10px" }}
                  >
                    <i
                      class="fas fa-times-circle pt-1"
                      style={{ color: "#747170" }}
                    ></i>
                    <p>
                      The next generation of the web's favorite icon library +
                      toolkit is now available as a Beta release! Try out the
                      Free version
                    </p>
                  </div>

                  <div
                    className="plan-1 d-flex justify-content-center"
                    style={{ gap: "10px" }}
                  >
                    <i
                      class="fas fa-times-circle pt-1"
                      style={{ color: "#747170" }}
                    ></i>
                    <p>
                      The next generation of the web's favorite icon library +
                      toolkit is now available as a Beta release! Try out the
                      Free version
                    </p>
                  </div>
                  <div
                    className="plan-1 d-flex justify-content-center"
                    style={{ gap: "10px" }}
                  >
                    <i
                      class="fas fa-check-circle pt-1"
                      style={{ color: "#747170" }}
                    ></i>
                    <p>
                      The next generation of the web's favorite icon library +
                      toolkit is now available as a Beta release! Try out the
                      Free version
                    </p>
                  </div>
                  <div
                    className="plan-1 d-flex justify-content-center"
                    style={{ gap: "10px" }}
                  >
                    <i
                      class="fas fa-times-circle pt-1"
                      style={{ color: "#747170" }}
                    ></i>
                    <p>
                      The next generation of the web's favorite icon library +
                      toolkit is now available as a Beta release! Try out the
                      Free version
                    </p>
                  </div>
                  <div class="col-12 pb-3 px-3">
                    <button
                      type="submit"
                      className="col-12 btn btn-primary "
                      onClick={() => {
                        sendPremiumUpgrade();
                        setModalShow(true);
                      }}
                    >
                      Request Access
                    </button>
                  </div>
                </div>
              </div>
              <SentModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </div>
        </DashPage>
      )}

      {user && user.isRequestingAccess === true && user.plan === "free" && (
        <PendingView />
      )}
    </div>
  );
}

export default Upgrade;

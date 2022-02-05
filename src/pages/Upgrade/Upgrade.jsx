import React from "react";
import { DashPage } from "../../components";
import styles from "./Upgrade.module.css";
import { Modal, Button } from "react-bootstrap";
import { loadUser } from "../../redux/actions/userAction";
import {
  _loadeCurrentlyLogedInUser,
  _userRequestPremiumPlan,
} from "../../Helpers/userHelper";
import { useDispatch } from "react-redux";
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
          For you to enjoy the Premium Plan!
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Upgrade() {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const sendPremiumUpgrade = () => {
    _userRequestPremiumPlan().then((response) => {
      _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    });
  };
  return (
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
                  toolkit is now available as a Beta release! Try out the Free
                  version
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
                  toolkit is now available as a Beta release! Try out the Free
                  version
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
                  toolkit is now available as a Beta release! Try out the Free
                  version
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
                  toolkit is now available as a Beta release! Try out the Free
                  version
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
                  toolkit is now available as a Beta release! Try out the Free
                  version
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
                  toolkit is now available as a Beta release! Try out the Free
                  version
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
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </DashPage>
  );
}

export default Upgrade;

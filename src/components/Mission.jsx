import React from "react";
import Fade from "react-reveal/Fade";

function Mission() {
  return (
    <div className="capsule">
      <div className="container-fluid mission">
        <div className="text-center pt-5 pb-3">
          <h2>Our Mission</h2>
        </div>
        <div className="row py-3 d-flex">
          <Fade top>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="hold">
                <img
                  src="/2.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <div className="text-left">
                <h5>
                  Our mission is to professionally equip our members through a
                  proven modern support system to excel in their various
                  industries and network marketing in particular.
                </h5>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Mission;

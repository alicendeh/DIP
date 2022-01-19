import React from "react";
import { MyPage } from "../components";

function Login() {
  return (
    <div className="main">
      <div className="box">
        <div className="first-part col-lg-6">
          <div className="part">
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
            <div className="py-2 d-flex justify-content-center align-items-center">
              <div className="circle d-flex justify-content-center align-items-center">
                <i class="fas fa-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="second-part col-lg-6">
          <div className="text-left pt-3 px-4">
            <h2 style={{ fontSize: "2.5em", color: "#281766" }}>Signin</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

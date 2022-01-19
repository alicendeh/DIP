import React from "react";
import { MyPage } from "../components";
import { Link } from "react-router-dom";
import Mission from "./Mission";
import Vision from "./Vision";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <MyPage>
      {" "}
      <div className="pt-2 pb-5 mt-2 mb-2">
        <div className="row home py-2 d-flex  ">
          <Fade left>
            <div className="col-lg-6 col-md-12 ">
              <div className="text-align-left pt-3 pb-3">
                <h1 style={{ color: "#1F73B9", fontSize: "3em" }}>
                  Let's find your Favourite book to improve your Knowledge
                </h1>
              </div>
              <div className="text-align-left py-2">
                <h3 style={{ color: "#6BA349", fontSize: "16px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu tempor felis. Vivamus luctus urna at ornare
                  facilisis
                </h3>
              </div>
              <div className="row find-input py-1 d-flex">
                <div className="enter p-0">
                  <input
                    className="form-control"
                    placeholder="| Type Word Here"
                  />
                </div>
                <div className="press p-0">
                  <Link to="/translatio">
                    <button className=" w-100">Find Now</button>
                  </Link>
                </div>
              </div>
              <div className="row py-3">
                <p className="fs-6" style={{ color: "#6BA349" }}>
                  Vivamus luctus urna at ornare at ornare facilisis{" "}
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="hold">
                <img
                  src="/1.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Fade>
        </div>
        <Mission />
        <Vision />
      </div>
    </MyPage>
  );
}

export default Home;

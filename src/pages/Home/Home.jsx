import React from "react";
import { Link } from "react-router-dom";
import { Mission, Vision, MyPage } from "../../components";
import Fade from "react-reveal/Fade";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
// import Network from "../../components/Network/Network";
import Team from "../../components/Team/Team";
function Home() {
  const user = useSelector((state) => state.user);
  console.log(user.isAuthenticated);

  // let arr = [3, 2, 2, 4, 3];
  // for (let index = 5; index <= arr.length; index--) {
  //   const element = arr[index];
  //   console.log(element);
  // }
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
              <div
                // className="row  py-1 d-flex"
                className={` ${styles.findInput} row py-1 d-flex`}
              >
                <div className={` ${styles.enter} p-0`}>
                  <input
                    className="form-control"
                    placeholder="| Type Word Here"
                  />
                </div>
                <div className={` ${styles.press} p-0`}>
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
        <Team />
      </div>
    </MyPage>
  );
}

export default Home;

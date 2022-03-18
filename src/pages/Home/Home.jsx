import React from "react";
import { Link } from "react-router-dom";
import { Mission, Vision, MyPage } from "../../components";
import Fade from "react-reveal/Fade";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
// import Network from "../../components/Network/Network";
import Team from "../../components/Team/Team";
import Ranks from "../../components/Ranks/Ranks";
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
      <div className=" pt-2 pb-5 mt-2 mb-2">
        <div
          className={` ${styles.home} container py-2 pb-5 d-flex`}
          style={{ marginBottom: "5em" }}
        >
          <div className="col-lg-6 col-md-12 ">
            <Fade left>
              <div className="text-align-left pt-3 pb-3">
                <h1
                  style={{
                    color: "#1F73B9",
                    fontSize: "3.5em",
                    fontWeight: "bold",
                  }}
                >
                  Welcome To Dream Institution For Professionalism
                </h1>
              </div>
              <div className="text-align-left py-2">
                <h3 style={{ color: "#6BA349", fontWeight: "bold" }}>
                  Building Deeper, Building Differently
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
                <h4
                  className="fs-5  "
                  style={{ color: "#222f3e", lineHeight: "1.5" }}
                >
                  Years of personal experience have proven that the saying by
                  John C. Maxwell “Everything rises and falls on leadership” is
                  hardly an exaggeration. Leadership is at the center of the
                  growth of every institution, organizations, governments,
                  networks and of course network marketing just to name a few.
                  DIP is a product conceived in the quest to provide solutions
                  to these leadership crisis in some of the aforementioned
                  sectors with keen interest in but not limited to network
                  marketing.
                </h4>
              </div>
            </Fade>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <Fade bottom>
              <div className="hold">
                <img
                  src="/a.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Fade>
          </div>
          <div class="custom-shape-divider-bottom-1647012188">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <Mission />
        <Vision />
        <Team />
        <Ranks />
      </div>
    </MyPage>
  );
}

export default Home;

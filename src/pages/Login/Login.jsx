import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { browserHistory } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { login, _loadeCurrentlyLogedInUser } from "../../Helpers/userHelper";
import { loginUser, isLoading, loadUser } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert/Alert";
import { Offline, Online } from "react-detect-offline";
import Network from "../../components/Network/Network";
function Login() {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.user !== null && user.user !== undefined) {
        user.user.role === "admin"
          ? navigate("/users")
          : user.user.role == "superadmin"
          ? navigate("/all-admins-users")
          : navigate("/dashboard");
      }
    }
  }, [user]);

  const dispatch = useDispatch();
  const [err, setErr] = useState();
  const [errMsg, setErrMsg] = useState();
  const [toggleEyePassword, setToggleEyePassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handletoggleEyePassword = () => {
    setToggleEyePassword(!toggleEyePassword);
  };

  const { email, password } = formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onsubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = { email, password };

    login(data).then((response) => {
      if (response.code == 400) {
        setIsLoading(false);

        setErrMsg(response.errorMessage);
        // console.log(response, "error");
      } else {
        setIsLoading(false);

        dispatch(loginUser(response));
        _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
      }

      // console.log(response.errorMessage);
    });
  };

  useEffect(() => {
    // console.log(errMsg, "boom");
  }, []);
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
              onClick={() => window.location.assign("/signup")}
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
              <form class="row g-3" onSubmit={(e) => onsubmit(e)}>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`${styles.int} form-control`}
                    id="inputEmail4"
                    name="email"
                    value={email}
                    onChange={(e) => onchange(e)}
                  />
                </div>
                <div class="col-md-12">
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
                      type={toggleEyePassword ? "text" : "password"}
                      className="form-control"
                      id="inputPassword4"
                      name="password"
                      value={password}
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
                </div>
                <div class="col-12">
                  {isLoading ? (
                    <div
                      className=" col-12 btn btn-primary "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    <button type="submit" className="col-12 btn btn-primary">
                      <span>Sign In</span>
                    </button>
                  )}
                </div>
                <div className="text-muted d-flex justify-content-center align-items-center">
                  <small style={{ color: "#bb2d00" }}>
                    Don't have an account click on the arrow or{" "}
                    <Link to="/signup">Signup</Link>
                  </small>
                </div>
                <span>{errMsg ? <Alert msg={errMsg} /> : null}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../components/MyFree/MyFree.module.css";
import { Form, Nav, NavDropdown } from "react-bootstrap";
import Header from "../../components/Admin/Header/Header";
import {
  usersFilteredList,
  booksFilteredList,
} from "../../redux/actions/adminAction";
import { LOGOUT } from "../../redux/ActionType";
import { useSelector, useDispatch } from "react-redux";
import Header1 from "../Admin/Header/Header1";

function MyFree({ children, take }) {
  const user = useSelector((state) => state.user);
  const [choice, setChoice] = useState(false);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState({ names: "" });
  const { names } = searchValue;
  const search = (e) => {
    setSearchValue({ names: e.target.value });
  };
  // const handleChoice = (e) => {
  //   if (e == "#/free") {
  //     setChoice(true);
  //     console.log("hey");
  //   } else {
  //     setChoice(false);
  //   }
  // };
  const data = useSelector((state) => state.admin);
  const { error, allBooks, allFreeBooks, loading, booksFilteredList } = data;
  return (
    <main>
      {/* Top header */}
      <nav
        className="navbar navbar-expand-lg navbar-light  pt-3 pb-3"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 2px 5px 0px" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img src="/Dip.jpeg" className="img-responsive" height="60" />
            {/* Dream Institution For Professionalism */}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="aid ml-5" style={{ width: "40%" }}>
              <Header1
                filtrationList={allBooks}
                filtrationFree={allFreeBooks}
                from={"free books plan"}
                to={"books Array"}
                click={() => setChoice()}
              />
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {choice ? (
                <NavDropdown
                  title="Category"
                  id="navbarScrollingDropdown"
                  className="pt-4 pr-3 fw-bold"
                >
                  <NavDropdown.Item
                    href="#courses"
                    value="courses"
                    onClick={(e) => take(e)}
                  >
                    Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" value="systemfundamentals">
                    {" "}
                    System Fundamentals
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    href="#action4"
                    value="advancecertificationprogram"
                  >
                    Advance Certification program
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action5"
                    value="DIPcoachingcertification"
                  >
                    DIP Coaching Certificate
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action6"
                    value="DIPmentorcertificate"
                  >
                    DIP Mentor Certificate
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="Category"
                  id="navbarScrollingDropdown"
                  className="pt-4 pr-3 fw-bold"
                >
                  <NavDropdown.Item href="#courses">
                    Customers Training
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5" value="buildingblocks">
                    System Building Blocks
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {" "}
                    DIP Prokit
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              <li className="nav-item pt-4 pr-4">
                <Link
                  to="/feedback"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontWeight: "700" }}
                >
                  Task
                </Link>
              </li>
              <li className="nav-item pt-4">
                <Link
                  to="/userprofile"
                  className={` ${styles.hideName}  nav-link actived`}
                  aria-current="page"
                  style={{ color: "#222f3e", fontWeight: "700" }}
                >
                  Hi, {user.user.name}
                </Link>
              </li>

              {/* <div className="d-flex" style={{ gap: "6px " }}> */}
              <div
                className={` ${styles.hideProfile}  profile rounded-circle`}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "violet",
                  marginTop: "15px",
                }}
              >
                <Link to="/userprofile">
                  {" "}
                  <img
                    src={
                      user.user && user.user.avater !== ""
                        ? user.user.avater
                        : "/defaultUserPic.webp"
                    }
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </div>
              <p className={`${styles.profileHide} `}>
                <Link to="/userprofile">Profile</Link>
              </p>
            </ul>
            <div className="pt-4 pl-2" style={{ cursor: "pointer" }}>
              <Link
                to="/"
                className="nav-link actived"
                aria-current="page"
                onClick={() =>
                  dispatch({
                    type: LOGOUT,
                  })
                }
              >
                <i
                  className={`fas fa-sign-out-alt fa-2x ${styles.logout} icon`}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${styles.containers} m-0 p-0`}>
        <div
          className="container  d-flex justify-content-center align-items-center"
          style={{ margin: "0em !important" }}
        >
          {children}
        </div>
      </div>

      {/* Footer */}

      <footer
        className="container-fluid page-footer font-small pt-4"
        style={{ backgroundColor: "#BFD9FE" }}
      >
        <div className="container text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home page
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    +222 222 222 222
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    info@agbp.com
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Yaounde, Lorem ipsum dolo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a
            href="https://mdbootstrap.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            dip.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default MyFree;

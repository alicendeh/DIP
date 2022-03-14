import React, { useState } from "react";
import { Link } from "react-router-dom";
// import code from "./Code"
function MyPage({ children }) {
  const [open, setOpen] = useState();

  return (
    <main>
      {/* Top header */}
      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-3">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            href="#"
            style={{ color: "#222f3e", fontweight: "700" }}
          >
            <img src="/Dip.jpeg" className="img-responsive" height="60" />
            Dream Institution For Professionalism
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
            <span>
              {" "}
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/testimony"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Testimonies
                </Link>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  About Us
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Institutes Background
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="dropdown-item dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Motivation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Key Partners (Superlife)
                    </a>
                  </li>
                </ul>
              </li> */}
              <li>
                {/* <a class="dropdown-item" href="#">
                  <DropDownMenuSelect
                    values={option}
                    handleOnClick={this.handleOnClick}
                  />
                </a> */}
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Submenu &raquo;
                    </a>
                    <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Submenu item 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Submenu item 2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Submenu item 3 &raquo;{" "}
                        </a>
                        <ul class="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Multi level 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Multi level 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Submenu item 4
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Submenu item 5
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Contact
                </Link>
              </li>
              <div className="d-flex" style={{ gap: "6px " }}>
                <button
                  type="button"
                  class="btn btn-outline-success p-0 py-0 px-2"
                  style={{ border: "2px solid #28a745" }}
                >
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link actived"
                      aria-current="page"
                      style={{ color: "#222f3e", fontweight: "700" }}
                    >
                      Signin
                    </Link>
                  </li>
                </button>

                <button type="button" class="btn btn-primary btn-sm py-0">
                  <li className="nav-item">
                    {" "}
                    <Link
                      to="/signup"
                      className="nav-link actived"
                      aria-current="page"
                      style={{ color: "white" }}
                    >
                      Signup
                    </Link>
                  </li>
                </button>
              </div>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </nav>

      <div>{children}</div>

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
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Home page
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
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
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    +222 222 222 222
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    info@dip.com
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
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
            style={{
              textDecoration: "none",
              color: "black",
              listStyle: "none",
            }}
          >
            {" "}
            dip.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default MyPage;

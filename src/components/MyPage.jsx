import React from "react";
import { Link } from "react-router-dom";

function MyPage({ children }) {
  return (
    <main>
      {/* Top header */}
      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-3">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link actived" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link actived" aria-current="page">
                  Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link actived" aria-current="page">
                  Vision
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
                    >
                      Signin
                    </Link>
                  </li>
                </button>

                <button type="button" class="btn btn-primary btn-sm py-0">
                  <li className="nav-item">
                    {" "}
                    <Link
                      to="/registeration"
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
          </div>
        </div>
      </nav>

      <div className="container">{children}</div>

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
                  <a href="#!">Home page</a>
                </li>
                <li>
                  <a href="#!">Help</a>
                </li>
                <li>
                  <a href="#!">Contribute</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">+222 222 222 222</a>
                </li>
                <li>
                  <a href="#!">info@agbp.com</a>
                </li>
                <li>
                  <a href="#!">Yaounde, Lorem ipsum dolo</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://mdbootstrap.com/"> dip.com</a>
        </div>
      </footer>
    </main>
  );
}

export default MyPage;

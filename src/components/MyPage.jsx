import React from "react";
import { Link } from "react-router-dom";

function MyPage({ children }) {
  return (
    <main>
      {/* Top header */}
      <nav
        className="navbar navbar-expand-lg navbar-light  pt-3 pb-3"
        style={{ backgroundColor: "#F5F9F3" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img src="/Dip.jpg" className="img-responsive" height="60" />
            Dream Inspired Project
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/help"
                  className="nav-link actived"
                  aria-current="page"
                >
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link actived"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contribute"
                  className="nav-link actived"
                  aria-current="page"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">{children}</div>

      {/* Footer */}

      <footer
        className="container-fluid page-footer font-small pt-4"
        style={{ backgroundColor: "#F5F9F3" }}
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
          <a href="https://mdbootstrap.com/"> agbp.com</a>
        </div>
      </footer>
    </main>
  );
}

export default MyPage;

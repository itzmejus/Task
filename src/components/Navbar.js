import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a class="navbar-brand" href="#">
              Admin Template
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/addEmp" style={{ textDecoration: 'none' }}>
                  <a class="nav-link" href="#">
                    Employees
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/designation" style={{ textDecoration: 'none' }}>
                  <a class="nav-link" href="#">
                    Designations
                  </a>
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <a class="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li> */}
            </ul>
            <form class="d-flex">
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button class="btn btn-outline-success" type="submit">
                  Login
                </button>
              </Link>

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

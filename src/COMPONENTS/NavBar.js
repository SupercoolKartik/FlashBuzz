import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
      <Link className="navbar-brand">Navbar</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/general"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/action">
                Action
              </a>
              <a className="dropdown-item" href="/another-action">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/something-else">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/business"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/entertainment"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/general"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/health"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/science"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/sports"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/technology"
              style={{ padding: "8px", fontSize: "16px", color: "white" }}
            >
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navbarRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        // Click outside the navbar
        if (
          togglerRef.current &&
          togglerRef.current.getAttribute("aria-expanded") === "true"
        ) {
          // Dropdown is currently open, close it
          togglerRef.current.click();
        }
      } else if (
        e.target.tagName === "A" &&
        e.target.closest(".navbar-collapse")
      ) {
        // Clicked on a link inside the navbar
        if (
          togglerRef.current &&
          togglerRef.current.getAttribute("aria-expanded") === "true"
        ) {
          // Dropdown is currently open, close it
          togglerRef.current.click();
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Cleanup: remove event listener when component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{ boxShadow: "0px 2px 20px rgba(0, 0, 0, 1)" }}
      ref={navbarRef}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/general" style={{ color: "red" }}>
          FlashBuzz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <Link
                className="nav-link disabled"
                to="/general"
                style={
                  location.pathname === "/general"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Home
              </Link> */}
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/general"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={
                  location.pathname === "/entertainment"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
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
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/general"
                style={
                  location.pathname === "/general"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/business"
                style={
                  location.pathname === "/business"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link disabled`}
                to="/entertainment"
                style={
                  location.pathname === "/entertainment"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/health"
                style={
                  location.pathname === "/health"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/science"
                style={
                  location.pathname === "/science"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/sports"
                style={
                  location.pathname === "/sports"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/technology"
                style={
                  location.pathname === "/technology"
                    ? { color: "#e5c9dc", textDecoration: "none" }
                    : { color: "white", textDecoration: "none" }
                }
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

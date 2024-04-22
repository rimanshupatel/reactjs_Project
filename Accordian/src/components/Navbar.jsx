/* eslint-disable react/prop-types */
// import {useState} from 'react'

import { Link } from "react-router-dom";

export default function Navbar(props) {
  // eslint-disable-next-line react/prop-types

  let darkMode = `${props.toggle === "dark" ? "text-light" : "text-dark"}`;
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.toggle}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${darkMode}`} href="#">
            Navbar
          </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active ${darkMode}`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <a
                className={`nav-link active ${darkMode}`}
                to="/src/components/About.jsx"
              >
                about
              </a> */}
              {/* <Link className={`nav-link active ${darkMode}`} to="/about">
                about
              </Link> */}
            </li>
          </ul>
          <div className={`form-check form-switch ${darkMode}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggler}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.toggle}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

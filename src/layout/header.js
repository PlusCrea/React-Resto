import React from "react";

export default function Header() {
  return (
    <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <a className="dropdown-item" href="/reservation">
                    Reservation
                  </a>
                  <a className="dropdown-item" href="/stuff">
                    Stuff
                  </a>
                  <a className="dropdown-item" href="/gallery">
                    Gallery
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Blog
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <a className="dropdown-item" href="/blog">
                    blog
                  </a>
                  <a className="dropdown-item" href="/blogdetail">
                    blog Single
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

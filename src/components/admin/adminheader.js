import React from "react";

export default function AdminHeader() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light bg-light"
      aria-label="Main navigation"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/admin">
          React Resto Admin
        </a>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Back To Web Site
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/listslider">
                | Main Slider
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/admin/listmenu">
                | Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/admin/listgallery">
                | Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/listreview">
                | Review
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

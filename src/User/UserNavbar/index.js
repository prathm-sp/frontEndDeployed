import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="navbar__container__home">
          <div className="navbar__menu__home">
            <li className="navbar__li">
              <Link to="/User__Booking" style={{ textDecoration: "none" }}>
                <span className="navbar__span">Booking</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link to="User__Camp__Sites" style={{ textDecoration: "none" }}>
                <span className="navbar__span">My Camp Sites</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="User__Account__settings"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">Account Setting</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

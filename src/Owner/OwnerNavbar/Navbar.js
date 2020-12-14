import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  var { color1, color2, color3 } = { ...props };
  return (
    <div className="ownerMAinBody">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="navbar__container__home">
          <div className="navbar__menu__home">
            <li className="navbar__li">
              <Link
                to="/Owner__Bookings/BookingPending"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="navbar__span"
                  style={{
                    height: "8vh",
                    width: "12vw",
                    background: "#e43655",
                    borderRadius: "34px",
                  }}
                >
                  BOOKING
                </button>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="../Owner__Bookings/Total__Earnings"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="navbar__span"
                  style={{
                    height: "8vh",
                    width: "12vw",
                    background: "transparent",
                    borderRadius: "34px",
                  }}
                >
                  EARNINGS
                </button>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="../Owner__Bookings/Account__Settings"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="navbar__span"
                  style={{
                    height: "8vh",
                    width: "12vw",
                    background: "transparent",
                    borderRadius: "34px",
                  }}
                >
                  ACCOUNT SETTING
                </button>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

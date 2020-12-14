import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Header/owner";
import OwnerNavbar from "../OwnerNavbar/Navbar";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../axios";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          background:
            "url(https://images7.alphacoders.com/101/thumb-1920-1011523.jpg)",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <div className="ownerMAinBody">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="navbar__container__home">
              <div className="navbar__menu__home">
                <li className="navbar__li">
                  <Link
                    to="/Owner__Bookings/BookingPending"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">BOOKING</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="../Owner__Bookings/Payment__History"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">EARNINGS</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="../Owner__Bookings/Account__Settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="mainHeader">ACCOUNT</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container xs={12} align="center">
        <Grid item xs={12}>
          <p
            style={{ fontSize: "23px", color: "#5e5e80", fontWeight: "bolder" }}
          >
            Account Setting
          </p>
        </Grid>
      </Grid>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container xs={12} align="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/Account__Settings"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
              }}
            >
              Account Settings
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/Bank__Details"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
                fontWeight: "bolder",
              }}
            >
              Bank Details
            </span>
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>
      <Divider style={{ color: "black" }} />
      <Grid item xs={1}></Grid>{" "}
      <Grid container xs={12} style={{ background: "#f2f7f7" }}>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            name="location"
            type="search"
            label="Account Holder Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            name="location"
            type="search"
            label="Bank Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            name="location"
            type="search"
            label="IFSC Code"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            name="location"
            type="search"
            label="Account Number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-search"
            name="location"
            type="search"
            label="Pan Number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <FormControlLabel control={<Checkbox />} label="Has GST" />
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={1}>
          <TextField
            id="outlined-search"
            name="location"
            type="search"
            label="OTP"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <Button variant="contained">Send Otp</Button>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" fullWidth>
            Submit
          </Button>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>
    </div>
  );
}

export default Home;

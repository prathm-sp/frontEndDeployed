import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Header/user";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../axios";
import "./style.css";
import PayButton from "./RazorPayButton";

function Home() {
  var [campDetails, setCampDetails] = useState();
  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    axios
      .get("/get_all_accepted_bookings", {
        method: "GET",
        headers: { Authorization: token },
      })
      .then((res) => {
        setCampDetails(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          background:
            "url(https://images7.alphacoders.com/101/thumb-1920-1011523.jpg)",
          minHeight: "100vh",
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
                    to="/User__Booking__Sent"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="mainHeader">Booking Sent</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link to="/User__Wishlist" style={{ textDecoration: "none" }}>
                    <span className="subHeader">Your WishList</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/User__Account__settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">Account Settings</span>
                  </Link>
                </li>
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
              style={{
                fontSize: "27px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Booking Pending
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid className="ownerDashboardBody">
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid>
            <Grid container xs={12} align="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Link
                  to="/User__Booking__Sent"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontSize: "18px",
                    }}
                    className="navbar__span"
                  >
                    Booking Sent
                  </span>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  to="/User__Payment__Pending"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bolder",
                    }}
                    className="navbar__span"
                  >
                    Payment Pending
                  </span>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  to="/User__Booking__Approved"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontSize: "18px",
                    }}
                    className="navbar__span"
                  >
                    Booking Approved
                  </span>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  to="/User__Booking__Rejected"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontSize: "18px",
                    }}
                    className="navbar__span"
                  >
                    Booking Rejected
                  </span>
                </Link>
              </Grid>
              <Grid container style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
            </Grid>
            <Grid>
              {campDetails?.bookings_made?.[0] == undefined ||
              campDetails == [] ? (
                <Grid container xs={12} justify="center" alignItems="center">
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Grid item xs={12} align="center">
                    <h1>No booking accepted yet, stay tuned!</h1>
                  </Grid>
                </Grid>
              ) : (
                campDetails?.bookings_made?.map?.((item, index) => {
                  return (
                    <Grid container xs={12} style={{ fontFamily: "ui-serif" }}>
                      <Grid container xs={12} style={{ visibility: "hidden" }}>
                        .
                      </Grid>{" "}
                      <Grid item xs={2}></Grid>
                      <Grid item xs={2}>
                        <img
                          className="Owner__Dashboard__photos"
                          src={item?.camp?.camp_images?.[0]}
                          style={{ marginLeft: "-6vw" }}
                        ></img>
                        <PayButton camp={item} />
                        <Grid
                          container
                          xs={12}
                          style={{ visibility: "hidden" }}
                        >
                          .
                        </Grid>{" "}
                        <Grid
                          container
                          xs={12}
                          style={{ visibility: "hidden" }}
                        >
                          .
                        </Grid>{" "}
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid container xs={3}>
                        <Grid item xs={12}>
                          <Grid item xs={12}>
                            <Grid
                              item
                              xs={12}
                              style={{ fontWeight: "bolder", color: "#c2d2cf" }}
                            >
                              Camp Name:
                            </Grid>
                            <span
                              style={{
                                fontWeight: "bolder",
                                fontSize: "22px",
                                color: "white",
                                textOverflow: "ellipsis",
                                overflowWrap: "anywhere",
                              }}
                            >
                              {item?.camp?.camp_name}
                            </span>
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid item xs={12} style={{ color: "#c2d2cf" }}>
                            <Grid
                              item
                              xs={12}
                              style={{ fontWeight: "bolder", color: "#c2d2cf" }}
                            >
                              Camp Location:
                            </Grid>
                            <span
                              style={{
                                fontSize: "22px",
                                fontWeight: "bolder",
                                color: "white",
                              }}
                            >
                              {item?.camp?.camp_location} (
                              {item?.camp?.camp_state})
                            </span>
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid item xs={12}>
                            <Grid
                              item
                              xs={12}
                              style={{ fontWeight: "bolder", color: "#c2d2cf" }}
                            >
                              Camper Information:
                            </Grid>
                            <div
                              style={{
                                fontWeight: "bolder",
                                fontSize: "22px",
                                color: "white",
                                textAlign: "center",
                                height: "22vh",
                                overflow: "hidden",
                                overflowY: "auto",
                                textAlign: "left",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "20px",
                                  color: "#b0d8d3",
                                }}
                              >
                                {" "}
                                Name:
                              </span>{" "}
                              <br />
                              {item?.camper_details?.firstname}&ensp;{" "}
                              {item?.camper_details?.lastname} <br />{" "}
                              <span
                                style={{
                                  fontSize: "20px",
                                  color: "#b0d8d3",
                                }}
                              >
                                {" "}
                                Address: <br />
                              </span>
                              {item?.camper_details?.address} <br />{" "}
                              <span
                                style={{
                                  fontSize: "20px",
                                  color: "#b0d8d3",
                                }}
                              >
                                {" "}
                                Mobile No:
                                <br />
                              </span>{" "}
                              {item?.camper_details?.mobile}
                              {/* {`${item?.camper_details?.firstname} ${item?.camper_details?.lastname}`}
                          {item?.camper_details?.address} &emsp; &emsp;
                          {item?.camper_details?.mobile} */}
                            </div>
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid container xs={2}>
                        <Grid item xs={12}>
                          <Grid item xs={12}>
                            <span
                              style={{
                                fontWeight: "bolder",
                                fontSize: "19px",
                                color: "#c2d2cf",
                              }}
                            >
                              Camping Dates
                            </span>
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid item xs={12}>
                            <span
                              style={{
                                fontWeight: "bolder",
                                color: "#b0d8d3",
                              }}
                            >
                              Check In Date: &emsp;&ensp;
                            </span>
                            <span
                              style={{
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "20px",
                              }}
                            >
                              {" "}
                              {item?.camp?.check_in}
                            </span>
                          </Grid>
                          <Grid item xs={12}>
                            <span
                              style={{
                                fontWeight: "bolder",
                                color: "#b0d8d3",
                              }}
                            >
                              Check Out Date:&emsp;
                            </span>
                            <span
                              style={{
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "20px",
                              }}
                            >
                              {" "}
                              {item?.camp?.check_out}{" "}
                            </span>
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>

                          <Grid item xs={12}>
                            <span
                              style={{
                                fontWeight: "bolder",
                                fontSize: "19px",
                                color: "#c2d2cf",
                              }}
                            >
                              Selected Types
                            </span>
                          </Grid>
                          <Grid item xs={4} style={{ visibility: "hidden" }}>
                            ,
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            style={{
                              height: "10rem",
                              overflow: "hidden",
                              overflowY: "auto",
                            }}
                          >
                            <span className="div">
                              {item?.a_details?.map((item, index) => (
                                <>
                                  <Grid item xs={12}>
                                    <span
                                      style={{
                                        fontWeight: "bolder",
                                        color: "#b0d8d3",
                                      }}
                                    >
                                      Type: &emsp; &emsp; &emsp; &emsp; &emsp;
                                    </span>
                                    <span style={{ color: "white" }}>
                                      {item?.name}{" "}
                                    </span>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <span
                                      style={{
                                        fontWeight: "bolder",
                                        color: "#b0d8d3",
                                      }}
                                    >
                                      No. Of People: &emsp; &ensp;&ensp;
                                    </span>
                                    <span style={{ color: "white" }}>
                                      {item?.noOfPeople}{" "}
                                    </span>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <span
                                      style={{
                                        fontWeight: "bolder",
                                        color: "#b0d8d3",
                                      }}
                                    >
                                      Total Price: &emsp; &ensp; &ensp;&emsp;
                                    </span>
                                    <span style={{ color: "white" }}>
                                      {item?.totalPrice}
                                    </span>
                                  </Grid>
                                  <Grid
                                    container
                                    xs={12}
                                    style={{ visibility: "hidden" }}
                                  >
                                    .
                                  </Grid>{" "}
                                </>
                              ))}
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container xs={12} style={{ visibility: "hidden" }}>
                        .
                      </Grid>{" "}
                      <Divider style={{ color: "black" }} />
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Grid>

          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;

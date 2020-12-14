import React, { useEffect, useState } from "react";
import "../../../style.css";
import { connect } from "react-redux";
import actions from "../../../../Redux/Action";
import axios from "../../../../axios";
import Navbar from "../../../../Header/admin";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../Navbar/Navbar";
import { Divider, Grid } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const { clearUser, clearOwner, clearAdmin } = actions;

function Index(props) {
  var [messages, setMessages] = useState();
  useEffect(() => {
    axios
      .get("/contact/getAllMessages")
      .then((res) => {
        console.log(res);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "url(https://images7.alphacoders.com/101/thumb-1920-1011523.jpg)",
          height: "auto",
          minHeight: "136vh",
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
                    to="/Admin__Booking/Pending"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">BOOKING</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/Delete__Admin__camp/Active__Camps"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">Delete Camps</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/Admin__Account__settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">ACCOUNT</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link to="/Messages" style={{ textDecoration: "none" }}>
                    <span className="mainHeader">MESSAGES</span>
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
                fontSize: "23px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              User Messages
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Divider style={{ color: "black" }} />
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <div
          className="message__admin"
          style={{
            background: "transparent",
            height: "auto",
            minHeight: "36rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="messages__sub__div"
            style={{
              background: "linear-gradient(45deg, black, transparent)",
              minHeight: "36rem",
              width: "30%",
              color: "white",
              fontWeight: "bolder",
              justifyContent: "center",
              align: "center",
              borderRadius: "20px",
            }}
          >
            {messages?.map((item) => (
              <span
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ color: "rgb(194, 210, 207)", fontSize: "23px" }}>
                  {" "}
                  Email:
                </span>
                <span>{item.email} </span>
                <br />
                <span style={{ color: "rgb(194, 210, 207)", fontSize: "23px" }}>
                  {" "}
                  Message:
                </span>
                <span
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "62%",
                      maxHeight: "11vh",
                      overflow: "auto",
                    }}
                  >
                    {item?.message}
                  </div>
                </span>
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Divider style={{ background: "#566f6a", width: "80%" }} />
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    owner: state.owner,
    admin: state.admin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearOwner: () => {
      dispatch(clearOwner());
    },
    clearAdmin: () => {
      dispatch(clearAdmin());
    },
    clearUser: () => {
      dispatch(clearUser());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

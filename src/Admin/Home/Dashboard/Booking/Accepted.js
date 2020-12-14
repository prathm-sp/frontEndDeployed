import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../Header/admin";
import OwnerNavbar from "../../../Navbar/Navbar";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../../../axios";

function Home() {
  var [campDetails, setCampDetails] = useState();
  useEffect(() => {
    axios.get("/admin/get_accepted_camps").then((res) => {
      setCampDetails(res.data);
    });
  }, []);
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
          minHeight: "100vh",
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
                    <span className="mainHeader">BOOKING</span>
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
                    <span className="subHeader">MESSAGES</span>
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
              Camps Pending
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} className="ownerDashboardBodys" spacing={10}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Link
              to="/Admin__Booking/Pending"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                }}
              >
                Pending Camps
              </span>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="/Admin__Booking/Accepted"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Accepted
              </span>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="/Admin__Booking/Rejected"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                }}
              >
                Rejected
              </span>
            </Link>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid
          style={{
            background: "linear-gradient(45deg, black, transparent)",
            width: "80%",
            display: "flex",
            backgroundSize: "cover",
            flexDirection: "column",
            margin: "auto",
            align: "center",
          }}
        >
          {campDetails?.[0] == undefined || campDetails == [] ? (
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
                <h1>No Active Camps yet!</h1>
              </Grid>
            </Grid>
          ) : (
            campDetails?.map?.((item, index) => {
              return (
                <Grid container xs={12} style={{ fontFamily: "ui-serif" }}>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}>
                    <img
                      className="Owner__Dashboard__photos"
                      src={item?.camp_images?.[0]}
                      style={{ marginLeft: "-6vw" }}
                    ></img>
                    <Grid container xs={12} style={{ visibility: "hidden" }}>
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
                          {item?.camp_name}
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
                          {item?.camp_location} ({item?.camp_state})
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
                          {item?.manager_name} <br />{" "}
                          <span
                            style={{
                              fontSize: "20px",
                              color: "#b0d8d3",
                            }}
                          >
                            {" "}
                            Camp Description: <br />
                          </span>
                          {item?.camp_desc} <br />{" "}
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
                          9511679830
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
                          {item?.check_in}
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
                          {item?.check_out}{" "}
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
      </div>
    </div>
  );
}

export default Home;

// import { Button, Divider, Grid } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../../../HomePage/Navbar/index";
// import AdminNavbar from "../../../Navbar/Navbar";
// import DoneIcon from "@material-ui/icons/Done";
// import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import axios from "../../../../axios";

// function Home() {
//   var [acceptedCamps, setAcceptedCamps] = useState();
//   useEffect(() => {
//     axios
//       .get("/admin/get_active_camps")
//       .then((res) => {
//
//         setAcceptedCamps(res.data);
//       })
//       .catch((err) => {
//
//       });
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <AdminNavbar />

//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container xs={12} align="center">
//         <Grid item xs={12}>
//           <p
//             style={{
//               fontSize: "23px",
//               color: "#5e5e80",
//               fontWeight: "bolder",
//             }}
//           >
//             Booking
//           </p>
//         </Grid>
//       </Grid>
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>

//       <Grid container xs={12} align="center">
//         <Grid item xs={3}></Grid>
//         <Grid item xs={2}>
//           <Link to="/Admin__Booking/Pending" style={{ textDecoration: "none" }}>
//             <span
//               style={{
//                 cursor: "pointer",
//                 color: "black",
//                 fontSize: "18px",
//               }}
//             >
//               Pending For Approval
//             </span>
//           </Link>
//         </Grid>
//         <Grid item xs={2}>
//           <Link
//             to="/Admin__Booking/Accepted"
//             style={{ textDecoration: "none" }}
//           >
//             <span
//               style={{
//                 cursor: "pointer",
//                 color: "black",
//                 fontWeight: "bolder",
//                 fontSize: "18px",
//               }}
//             >
//               Accepted
//             </span>
//           </Link>
//         </Grid>
//         <Grid item xs={2}>
//           <Link
//             to="/Admin__Booking/Rejected"
//             style={{ textDecoration: "none" }}
//           >
//             <span
//               style={{ cursor: "pointer", color: "black", fontSize: "18px" }}
//             >
//               Rejected
//             </span>
//           </Link>
//         </Grid>
//         <Grid container style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//       </Grid>
//       <Divider style={{ color: "black" }} />
//       <Grid container style={{ visibility: "hidden" }}>
//         .
//       </Grid>

//       <Grid container>
//         <Grid item xs={2}></Grid>
//         <Grid container xs={1}>
//           <img
//             src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             className="photos"
//           />{" "}
//           <Grid item xs={1} style={{ position: "absolute" }}>
//             <DoneIcon style={{ cursor: "pointer", color: "green" }} />
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid item sm={11} xs={10}>
//             <p
//               style={{
//                 overflow: "hidden",
//                 whiteSpace: "no-wrap",
//                 textOverflow: "ellipsis",
//                 fontWeight: "bolder",
//               }}
//             >
//               item.camp_name
//             </p>
//           </Grid>
//           <Grid item xs={1}>
//             <Button variant="contained" style={{ background: "#a1e6a1" }}>
//               Details
//             </Button>
//           </Grid>
//           <Grid item sm={11} xs={10}>
//             <p
//               style={{
//                 overflow: "hidden",
//                 whiteSpace: "no-wrap",
//                 textOverflow: "ellipsis",
//               }}
//             >
//               location
//             </p>
//           </Grid>{" "}
//         </Grid>
//         <Grid item xs={1}></Grid>
//       </Grid>
//       <Grid item xs={1}></Grid>
//     </div>
//   );
// }

// export default Home;

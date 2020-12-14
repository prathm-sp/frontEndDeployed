import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import actions from "../Redux/Action";
import Footer from "../Admin/Footer/Footer";

const {
  setCampAmenities,
  setCampActivities,
  setCampAccomodation,
  setCampDetails,
  setCampOwnerDetails,
  setCampManagerDetails,
  setCampExtraDetails,
} = actions;

function Index(props) {
  const history = useHistory();
  var [bookingDetails, setBookingDetails] = useState();

  var [priceDetails, setPriceDetails] = useState();
  var [Prices, setPrices] = useState();
  var [Bookings, setBookings] = useState();

  // useEffect(() => {
  //   const priceDetails = localStorage.getItem("priceDetails");
  //   const bookingDetails = localStorage.getItem("bookingDetails");

  //

  //
  //   if (priceDetails || bookingDetails) {
  //     if (bookingDetails) {
  //
  //
  //       setBookings(JSON.parse(bookingDetails));
  //     }
  //     if (priceDetails) {
  //       setPrices(JSON.parse(priceDetails));
  //     }
  //   }
  // }, []);

  const handleChange = (e) => {
    setBookings((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePriceChange = (e, itemName) => {
    let { name, value } = e.target;
    let copy = { ...priceDetails };
    copy = { ...copy, [name]: value };

    setPrices((prevState) => {
      return {
        ...prevState,
        [itemName]: {
          ...prevState?.[itemName],
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = async () => {
    localStorage.setItem("priceDetails", JSON.stringify(Prices));
    localStorage.setItem("bookingDetails", JSON.stringify(Bookings));

    props.setCampAccomodation(Prices);
    props.setCampExtraDetails(Bookings);

    history.push("/CampUserForm4");
  };

  return (
    <div>
      <Grid
        container
        className="Owner__Camp__Container formBody"
        justify="center"
      >
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={3} justify="center">
          <Link to="/CampUserForm1" style={{ textDecoration: "none" }}>
            <span className="subHeader"> 1 Basic Details </span>
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm2" style={{ textDecoration: "none" }}>
            <span className="subHeader"> 2.Activities </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm3" style={{ textDecoration: "none" }}>
            {" "}
            <span className="mainHeader"> 3.Accomodation </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm4" style={{ textDecoration: "none" }}>
            {" "}
            <span className="subHeader"> 4.Manager </span>{" "}
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm5" style={{ textDecoration: "none" }}>
            {" "}
            <span className="subHeader"> 5.Images </span>{" "}
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item align="center" xs={12}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Enter Camp Accomodation
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Please indicate when you’d like campers to check in and out{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <p
              style={{
                fontSize: 14,
                color: "#a08c8c",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Check in time (In 24 hour format)
            </p>
          </Grid>
          <Grid item xs={5}>
            <p style={{ fontSize: 14, color: "white", fontWeight: "bolder" }}>
              Check out time (In 24 hour format)
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth>
              <Select
                style={{
                  border: "3px solid white",
                  borderRadius: "17px",
                }}
                value={Bookings ? Bookings.checkInTime : ""}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="checkInTime"
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="12:00 am">12:00 am</MenuItem>
                <MenuItem value="1:00 am">1:00 am</MenuItem>
                <MenuItem value="2:00 am">2:00 am</MenuItem>
                <MenuItem value="3:00 am">3:00 am</MenuItem>
                <MenuItem value="4:00 am">4:00 am</MenuItem>
                <MenuItem value="5:00 am">5:00 am</MenuItem>
                <MenuItem value="6:00 am">6:00 am</MenuItem>
                <MenuItem value="7:00 am">7:00 am</MenuItem>
                <MenuItem value="8:00 am">8:00 am</MenuItem>
                <MenuItem value="9:00 am">9:00 am</MenuItem>
                <MenuItem value="10:00 am">10:00 am</MenuItem>
                <MenuItem value="11:00 am">11:00 am</MenuItem>
                <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                <MenuItem value="1:00 pm">1:00 pm</MenuItem>
                <MenuItem value="2:00 pm">2:00 pm</MenuItem>
                <MenuItem value="3:00 pm">3:00 pm</MenuItem>
                <MenuItem value="4:00 pm">4:00 pm</MenuItem>
                <MenuItem value="5:00 pm">5:00 pm</MenuItem>
                <MenuItem value="6:00 pm">6:00 pm</MenuItem>
                <MenuItem value="7:00 pm">7:00 pm</MenuItem>
                <MenuItem value="8:00 pm">8:00 pm</MenuItem>
                <MenuItem value="9:00 pm">9:00 pm</MenuItem>
                <MenuItem value="10:00 pm">10:00 pm</MenuItem>
                <MenuItem value="11:00 pm">11:00 pm</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth>
              <Select
                style={{
                  border: "3px solid white",
                  borderRadius: "17px",
                }}
                value={
                  Bookings
                    ? Bookings.checkOutTime
                    : bookingDetails?.checkOutTime
                }
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="checkOutTime"
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="12:00 am">12:00 am</MenuItem>
                <MenuItem value="1:00 am">1:00 am</MenuItem>
                <MenuItem value="2:00 am">2:00 am</MenuItem>
                <MenuItem value="3:00 am">3:00 am</MenuItem>
                <MenuItem value="4:00 am">4:00 am</MenuItem>
                <MenuItem value="5:00 am">5:00 am</MenuItem>
                <MenuItem value="6:00 am">6:00 am</MenuItem>
                <MenuItem value="7:00 am">7:00 am</MenuItem>
                <MenuItem value="8:00 am">8:00 am</MenuItem>
                <MenuItem value="9:00 am">9:00 am</MenuItem>
                <MenuItem value="10:00 am">10:00 am</MenuItem>
                <MenuItem value="11:00 am">11:00 am</MenuItem>
                <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                <MenuItem value="1:00 pm">1:00 pm</MenuItem>
                <MenuItem value="2:00 pm">2:00 pm</MenuItem>
                <MenuItem value="3:00 pm">3:00 pm</MenuItem>
                <MenuItem value="4:00 pm">4:00 pm</MenuItem>
                <MenuItem value="5:00 pm">5:00 pm</MenuItem>
                <MenuItem value="6:00 pm">6:00 pm</MenuItem>
                <MenuItem value="7:00 pm">7:00 pm</MenuItem>
                <MenuItem value="8:00 pm">8:00 pm</MenuItem>
                <MenuItem value="9:00 pm">9:00 pm</MenuItem>
                <MenuItem value="10:00 pm">10:00 pm</MenuItem>
                <MenuItem value="11:00 pm">11:00 pm</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>Price details</p>
          </Grid>
          <Grid item xs={2}></Grid>{" "}
          <Grid item xs={10}>
            <p>What would you like to charge campers?</p>
          </Grid>
          <Grid container>
            {props?.campDetails?.campAccomodation?.map?.((item, key) => (
              <Grid container key={key}>
                <Grid container>
                  <Grid item xs={2}></Grid>{" "}
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>Accommodation Type</p>
                  </Grid>
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>Total Capacity</p>
                  </Grid>
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>
                      Number of people allowed
                    </p>
                  </Grid>
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>
                      Price per night(in Rs)
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}>
                    <p>{item}</p>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{
                        border: "3px solid white",
                        borderRadius: "17px",
                      }}
                      name="totalCapacity"
                      onChange={(e) => {
                        handlePriceChange(e, item);
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{
                        border: "3px solid white",
                        borderRadius: "17px",
                      }}
                      name="numberOfPeopleAllowed"
                      onChange={(e) => {
                        handlePriceChange(e, item);
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-number"
                      type="number"
                      name="pricePerNight"
                      onChange={(e) => {
                        handlePriceChange(e, item);
                      }}
                      style={{
                        border: "3px solid white",
                        borderRadius: "17px",
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{ fontSize: 20, fontWeight: "bolder" }}>
                Cancellation policy
              </p>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p>
              Please select the cancellation policy that applies to the
              campsite?
            </p>
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <FormControl variant="filled" style={{ minWidth: "100%" }}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  style={{ color: "white" }}
                >
                  Select Policy
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Bookings ? Bookings.policy : ""}
                  name="policy"
                  onChange={handleChange}
                  label="Age"
                  style={{
                    border: "3px solid white",
                    borderRadius: "17px",
                  }}
                >
                  <MenuItem value="Super Flexible">Super Flexible</MenuItem>
                  <MenuItem value="Flexible">Flexible</MenuItem>
                  <MenuItem value="Moderate">Moderate</MenuItem>
                  <MenuItem value="Strict">Strict</MenuItem>
                  <MenuItem value="Super Strict">Super Strict</MenuItem>
                  <MenuItem value="Super Strict(30 days)">
                    Super Strict(30 days)
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            {Bookings?.policy == "Super Flexible" ? (
              <p>
                If you cancel anytime before your check in day and time, you’ll
                receive a full refund (minus Lamp A Camp fees).
              </p>
            ) : Bookings?.policy == "Flexible" ? (
              <p>
                If you cancel at least 24 hours before your check in day and
                time, you’ll receive a full refund (minus Lamp A Camp fees). If
                you cancel less than 24 hours before check in, there will be no
                refund.
              </p>
            ) : Bookings?.policy == "Moderate" ? (
              <p>
                If you cancel at least 3 days before your check in day and time,
                you’ll receive a full refund (minus Lamp A Camp fees). If you
                cancel within the 3 days before check in, there will be no
                refund.
              </p>
            ) : Bookings?.policy == "Strict" ? (
              <p>
                If you cancel at least 1 week before your check in day and time,
                you’ll receive a full refund (minus Lamp A Camp fees). If you
                cancel within the 1 week before check in, there will be no
                refund.
              </p>
            ) : Bookings?.policy == "Super Strict" ? (
              <p>
                If you cancel at least 1 week before your check in day and time,
                you’ll receive a 50% refund (minus Lamp A Camp fees). If you
                cancel within 1 week before check in, there will be no refund.
              </p>
            ) : Bookings?.policy == "Super Strict(30 days)" ? (
              <p>
                If you cancel at least 30 days before your check in day and
                time, you’ll receive a 50% refund (minus Lamp A Camp fees). If
                you cancel within 30 days before check in, there will be no
                refund.
              </p>
            ) : (
              <p></p>
            )}
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={0} sm={9} align="flex-end"></Grid>
            <Grid item xs={12} sm={1} align="flex-end">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campActivities: state.campDetails.campActivities,
    campAccomodation: state.campDetails.campAccomodation,
    campAmenities: state.campDetails.campAmenities,
    campDetails: state.campDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampActivities: (data) => {
      dispatch(setCampActivities(data));
    },
    setCampAccomodation: (data) => {
      dispatch(setCampAccomodation(data));
    },
    setCampAmenities: (data) => {
      dispatch(setCampAmenities(data));
    },
    setCampDetails: (data) => {
      dispatch(setCampDetails(data));
    },
    setCampManagerDetails: (data) => {
      dispatch(setCampManagerDetails(data));
    },
    setCampExtraDetails: (data) => {
      dispatch(setCampExtraDetails(data));
    },
    setCampOwnerDetails: (data) => {
      dispatch(setCampOwnerDetails(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

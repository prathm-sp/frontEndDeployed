import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import Footer from "../Admin/Footer/Footer";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import actions from "../Redux/Action";
import axios from "../axios";
import "./style.css";

const {
  setCampAmenities,
  setCampActivities,
  setCampAccomodation,
  setCampDetails,
} = actions;

function Index(props) {
  const history = useHistory();

  var [activities, setActivities] = useState({
    Trekking: false,
    Off_Roading: false,
    Climbing: false,
    White_Water_Rafting: false,
    Wildlife_Watching: false,
    Swimming: false,
    Cycling: false,
  });

  var [Amenities, setAmenities] = useState({
    Pets_Allowed: false,
    Toilet: false,
    Shower: false,
    Campfire: false,
    Covered_Area: false,
    Charging_Points: false,
    Drinking_water: false,
  });

  var [Accommodation, setAccommodation] = useState({
    Dorm: false,
    Farm_Cottage: false,
    Mud_House: false,
    Villas: false,
    Tree_House: false,
    Tent: false,
    Park_N_Camp: false,
  });

  useEffect(() => {
    const Accommodation = localStorage.getItem("Accommodation");
    const Amenities = localStorage.getItem("Amenities");
    const activities = localStorage.getItem("activities");

    if (Accommodation || Amenities || activities) {
      setActivities(JSON.parse(activities));
      setAmenities(JSON.parse(Amenities));
      setAccommodation(JSON.parse(Accommodation));
    }
  }, []);

  const handleChange = (e) => {
    setActivities((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleAmenitiesChange = (e) => {
    setAmenities((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleAccommodationChange = (e) => {
    setAccommodation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem("activities", JSON.stringify(activities));
    localStorage.setItem("Accommodation", JSON.stringify(Accommodation));
    localStorage.setItem("Amenities", JSON.stringify(Amenities));

    const final__activities = Object.keys(activities).filter(
      (k) => activities[k]
    );
    const final__accommodation = Object.keys(Accommodation).filter(
      (k) => Accommodation[k]
    );
    const final__amenities = Object.keys(Amenities).filter((k) => Amenities[k]);

    props.setCampAccomodation(final__accommodation);
    props.setCampActivities(final__activities);
    props.setCampAmenities(final__amenities);

    history.push("/CampUserForm3");
  };
  return (
    <div className="CampUserForm  formBody">
      <Grid container className="Owner__Camp__Container" justify="center">
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
            <span className="mainHeader"> 2.Activities </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm3" style={{ textDecoration: "none" }}>
            {" "}
            <span className="subHeader"> 3.Accomodation </span>
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
              Enter Camp Activites
            </p>
          </Grid>
        </Grid>
        <Grid container xs={1}></Grid>
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Check all fun things to do{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Please check all the activities available/apply in your campsite
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontWeight: "bolder", color: "#01A2A6" }}>Activities</p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5} style={{ fontWeight: "bolder" }}>
            <FormControlLabel
              style={{ fontWeight: "bolder" }}
              control={
                <Checkbox
                  checked={activities.Trekking ? true : ""}
                  onChange={handleChange}
                  name="Trekking"
                />
              }
              label="Trekking"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Off_Roading ? true : ""}
                  onChange={handleChange}
                  name="Off_Roading"
                />
              }
              label="Off-roading"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Climbing ? true : ""}
                  onChange={handleChange}
                  name="Climbing"
                />
              }
              label="Climbing"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.White_Water_Rafting ? true : ""}
                  onChange={handleChange}
                  name="White_Water_Rafting"
                />
              }
              label="White Water Rafting"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Wildlife_Watching ? true : ""}
                  onChange={handleChange}
                  name="Wildlife_Watching"
                />
              }
              label="Wildlife-Watching"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Swimming ? true : ""}
                  onChange={handleChange}
                  name="Swimming"
                />
              }
              label="Swimming"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Cycling ? true : ""}
                  onChange={handleChange}
                  name="Cycling"
                />
              }
              label="Cycling"
            />
          </Grid>
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder", color: "#01A2A6" }}>
              Select camp amenities{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Check all the available equipment or resources
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Drinking_water ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Drinking_water"
                />
              }
              label="Drinking water"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Charging_Points ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Charging_Points"
                />
              }
              label="Charging points"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Covered_Area ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Covered_Area"
                />
              }
              label="Covered Area"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Campfire ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Campfire"
                />
              }
              label="Campfire"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Shower ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Shower"
                />
              }
              label="Shower"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Toilet ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Toilet"
                />
              }
              label="Toilet"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Pets_Allowed ? true : ""}
                  onChange={handleAmenitiesChange}
                  name="Pets_Allowed"
                />
              }
              label="Pets allowed"
            />
          </Grid>
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder", color: "#01A2A6" }}>
              Check all the types of accommodation you will provide{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Please check all the accommodations available/apply in your
              campsite
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Tent ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Tent"
                />
              }
              label="Tent"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Tree_House ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Tree_House"
                />
              }
              label="Tree House"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Villas ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Villas"
                />
              }
              label="Villas"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Mud_House ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Mud_House"
                />
              }
              label="Mud House"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Dorm ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Dorm"
                />
              }
              label="Dorm"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Farm_Cottage ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Farm_Cottage"
                />
              }
              label="Farm Cottage"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Park_N_Camp ? true : ""}
                  onChange={handleAccommodationChange}
                  name="Park_N_Camp"
                />
              }
              label="Park N Camp"
            />
          </Grid>
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={0} sm={9} align="flex-end"></Grid>
          <Grid item xs={12} sm={1} align="flex-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              type="submit"
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
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campActivities: state.campActivities,
    campAccomodation: state.campAccomodation,
    campAmenities: state.campAmenities,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

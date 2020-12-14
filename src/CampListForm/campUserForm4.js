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
import axios from "../axios";
import Footer from "../Admin/Footer/Footer";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
  var [checkValue, setCheckValue] = useState(false);
  var [contactDetails, setContactDetails] = useState({
    email: "prathmeshKulkdarni@gmail.com",
    link: "Prathmesh",
    managerEmail: "",
    managerLandline: "",
    managerName: "",
    managerNumber: "",
    ownerLandline: "",
    ownerName: "Prathmesh",
    ownerNumber: "8797857854",
  });

  var [manager, setManager] = useState();

  useEffect(() => {
    const managerDetails = localStorage.getItem("Manager");

    if (managerDetails) {
      setContactDetails(JSON.parse(managerDetails));
    }
  }, []);

  const handleChange = (e) => {
    setContactDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    props.setCampOwnerDetails(contactDetails);
  };

  const handleSubmit = async () => {
    let token = localStorage.getItem("auth-token");

    localStorage.setItem("Manager", JSON.stringify(contactDetails));

    axios
      .post("/owner/create_camp", props.campDetails, {
        headers: { Authorization: token },
      })
      .then((res) => {
        toast.info(
          `Booking Details Accepted! Now Upload Images for your Camp`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          }
        );
        history.push("/CampUserForm5");
      })
      .catch((err) => {
        toast.error(`${err.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      });
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
            <span className="subHeader"> 3.Accomodation </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm4" style={{ textDecoration: "none" }}>
            {" "}
            <span
              style={{
                fontSize: 20,
                cursor: "pointer",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mainHeader"
            >
              {" "}
              4.Manager{" "}
            </span>{" "}
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
              Enter Camp Manager Details
            </p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Owner</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Email</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              onChange={handleChange}
              defaultValue={props?.owner?.user?.firstname}
              fullWidth
              type="search"
              variant="outlined"
              name="ownerName"
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              defaultValue={props?.owner?.user?.email}
              fullWidth
              type="search"
              onChange={handleChange}
              name="email"
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Contact Number</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Landline Number</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              defaultValue={props?.owner?.user?.mobile}
              name="ownerNumber"
              fullWidth
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              onChange={handleChange}
              type="search"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              value={contactDetails ? contactDetails.ownerLandline : ""}
              name="ownerLandline"
              fullWidth
              onChange={handleChange}
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              type="search"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={0} sm={7} align="flex-end"></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Manager Name</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Manager Email</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              onChange={handleChange}
              fullWidth
              value={contactDetails ? contactDetails.managerName : ""}
              name="managerName"
              type="search"
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              onChange={handleChange}
              value={contactDetails ? contactDetails.managerEmail : ""}
              name="managerEmail"
              fullWidth
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              type="search"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Manager Number</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp manager landline</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              onChange={handleChange}
              id="outlined-search"
              value={contactDetails ? contactDetails.managerNumber : ""}
              name="managerNumber"
              fullWidth
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              type="search"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="managerLandline"
              value={contactDetails ? contactDetails.managerLandline : ""}
              id="outlined-search"
              onChange={handleChange}
              fullWidth
              style={{
                border: "3px solid white",
                borderRadius: "17px",
              }}
              type="search"
              variant="outlined"
            />
          </Grid>
        </Grid>
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
            >
              Next
            </Button>
          </Grid>
        </Grid>
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
    campActivities: state.campActivities,
    campAccomodation: state.campAccomodation,
    campAmenities: state.campAmenities,
    campDetails: state.campDetails,
    owner: state.owner,
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

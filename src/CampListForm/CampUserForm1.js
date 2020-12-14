import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Footer from "../Admin/Footer/Footer";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import actions from "../Redux/Action";
import axios from "../axios";
import "./style.css";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./style.css";

import TextEditor2 from "./plugins";
const mdParser = new MarkdownIt();

const { setCampDetails } = actions;

function Index(props) {
  var [select, setSelect] = useState();
  const history = useHistory();
  var [camp, setCamp] = useState();
  const handleChange = (e) => {
    setCamp((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleValidation() {
    let fields = { ...camp };
    let errors = {};
    let formIsValid = true;

    if (
      !fields.accessibleBy ||
      !fields.campDescription ||
      !fields.interestingName ||
      !fields.landType ||
      !fields.location ||
      !fields.originalName ||
      !fields.state
    ) {
      formIsValid = false;
    }

    return formIsValid;
  }

  useEffect(() => {
    const data = localStorage.getItem("campUserForm1");

    if (data == undefined) return 0;
    else if (data) {
      setCamp(JSON.parse(data));
    }
  }, []);

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };
  const handleSubmit = () => {
    if (!handleValidation()) {
      return 0;
    } else {
      localStorage.setItem("campUserForm1", JSON.stringify(camp));

      props.setCampDetails(camp);
      history.push("/CampUserForm2");
    }
  };

  function handleEditorChange({ html, text }) {}
  ClassicEditor.create(document.getElementById("prathmesh"), {
    removePlugins: ["Bold", "Link"],
    toolbar: ["italic", "bulletedList", "numberedList", "blockQuote"],
  });

  return (
    <div className="CampUserForm formBody">
      <Grid container className="Owner__Camp__Container" justify="center">
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={3} justify="center">
          <Link to="/CampUserForm1" className="link1">
            <span className="mainHeader"> 1 Basic Details </span>
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
              Enter Camp Details
            </p>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={8}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>
                Give your campsite an interesting name
              </p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={10} sm={6}>
              <TextField
                onChange={handleChange}
                name="interestingName"
                variant="outlined"
                value={camp ? camp.interestingName : ""}
                fullWidth
                style={{
                  border: "3px solid white",
                  borderRadius: "17px",
                }}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>
                Type in your campsite's original name
              </p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={9} sm={6}>
              <TextField
                id="outlined-search"
                name="originalName"
                onChange={handleChange}
                value={camp ? camp.originalName : ""}
                type="search"
                variant="outlined"
                fullWidth
                style={{
                  border: "3px solid white",
                  borderRadius: "17px",
                }}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>Campsite description</p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={9} sm={6}>
              {/* <TextField
                id="outlined-search"
                value={camp?.campDescription}
                name="campDescription"
                onChange={handleChange}
                type="search"
                variant="outlined"
                fullWidth
              /> */}
              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData("text/plain");
                  var result = data.substring(3, data.length - 4);
                  setCamp((prevState) => ({
                    ...prevState,
                    ["campDescription"]: result,
                  }));
                }}
                style={{
                  border: "3px solid white",
                  borderRadius: "17px",
                }}
                name="campDescription"
                value="prara"
                id="prathmesh"
              />

              {/* <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
              /> */}

              {/* <TextEditor2 /> */}

              {/* <textarea
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                onChange={handleChange}
                style={{
                  background: "transparent",
                  width: " 100%",
                  color: "white",
                  padding: "5px",
                  borderRadius: "20px",
                  border: "2px solid",
                }}
                value={camp ? camp.campDescription : ""}
                name="campDescription"
                rows="4"
                cols="50"
              >
                Hello world
              </textarea> */}
            </Grid>
          </Grid>
          <Grid container>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <p style={{ fontWeight: "bolder" }}>Select State</p>
              </Grid>
              <Grid item sm={3} xs={0}></Grid>
              <Grid item xs={9} sm={6}>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={camp ? camp.state : ""}
                    name="state"
                    onChange={handleChange}
                    style={{
                      border: "3px solid white",
                      borderRadius: "17px",
                    }}
                  >
                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                    <MenuItem value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </MenuItem>
                    <MenuItem value="Arunachal Pradesh">
                      Arunachal Pradesh
                    </MenuItem>
                    <MenuItem value="Assam">Assam</MenuItem>
                    <MenuItem value="Bihar">Bihar</MenuItem>
                    <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                    <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                    <MenuItem value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </MenuItem>
                    <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
                    <MenuItem value="Puducherry">Puducherry</MenuItem>
                    <MenuItem value="Goa">Goa</MenuItem>
                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                    <MenuItem value="Haryana">Haryana</MenuItem>
                    <MenuItem value="Himachal Pradesh">
                      Himachal Pradesh
                    </MenuItem>
                    <MenuItem value="Jammu and Kashmir">
                      Jammu and Kashmir
                    </MenuItem>
                    <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="Kerala">Kerala</MenuItem>
                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                    <MenuItem value="Manipur">Manipur</MenuItem>
                    <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                    <MenuItem value="Nagaland">Nagaland</MenuItem>
                    <MenuItem value="Odisha">Odisha</MenuItem>
                    <MenuItem value="Punjab">Punjab</MenuItem>
                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                    <MenuItem value="Telangana">Telangana</MenuItem>
                    <MenuItem value="Tripura">Tripura</MenuItem>
                    <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                    <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>Select Location</p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={9} sm={6}>
              <TextField
                id="outlined-search"
                value={camp ? camp.location : ""}
                name="location"
                onChange={handleChange}
                type="search"
                variant="outlined"
                fullWidth
                style={{
                  border: "3px solid white",
                  borderRadius: "17px",
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={4}>
              <p style={{ fontWeight: "bolder" }}>Land type</p>
            </Grid>
            <Grid item xs={4}>
              <p style={{ fontWeight: "bolder" }}>Accessible By</p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" fullWidth>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={camp ? camp.landType : ""}
                  name="landType"
                  onChange={handleChange}
                  label="Age"
                  style={{
                    border: "3px solid white",
                    borderRadius: "17px",
                  }}
                >
                  <MenuItem value="Government">Government</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Public">Public</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2} xs={0}></Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" fullWidth>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={camp ? camp.accessibleBy : ""}
                  name="accessibleBy"
                  onChange={handleChange}
                  style={{
                    border: "3px solid white",
                    borderRadius: "17px",
                  }}
                >
                  <MenuItem value="Road">Road</MenuItem>
                  <MenuItem value="Rail-Way">Rail-Way</MenuItem>
                  <MenuItem value="Driv-I">Driv-In</MenuItem>
                  <MenuItem value="4*4 only">4*4 only</MenuItem>
                  <MenuItem value="Boat only">Boat only</MenuItem>
                  <MenuItem value="Hike">Hike</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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
      </Grid>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campDetails: state.campDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampDetails: (data) => {
      dispatch(setCampDetails(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

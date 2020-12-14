import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          color="default-color"
          className="cao"
          dark
          expand="md"
          style={{
            padding: "17px",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            <img
              style={{ width: "2rem", marginLeft: "16px" }}
              src={
                "https://crds-cms-uploads.imgix.net/content/images/crossroads-church-couples-camp-logo.png"
              }
            />
          </a>

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" style={{ color: "white" }} />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/CampUser">
                      {/* <Link style={{ color: "black ", textDecoration: "none" }}> */}
                      Camper Login
                      {/* </Link> */}
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/CampOwner">
                      {/* <Link style={{ color: "black ", textDecoration: "none" }}> */}
                      Campe Owner Logins
                      {/* </Link> */}
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;

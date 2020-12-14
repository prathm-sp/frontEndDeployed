import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./index.css";
import SelectUser from "./SelectUser/";
import CampOwner from "./SelectUser/CampOwner";
import CampUser from "./SelectUser/CampUser";
import { connect } from "react-redux";
import actions from "./Redux/Action";

import Footer from "./Admin/Footer/Footer";
import Booking__Admin from "./Admin/Home/Dashboard/Booking/Pending";
import Active__Camps from "./Admin/Home/Dashboard/DeleteCamps/ActiveCamps";
import Deleted__Camps from "./Admin/Home/Dashboard/DeleteCamps/DeletedCamps";
import Account__Setting__Admin from "./Admin/Home/Dashboard/AccountSetting";
import Contact_Page from "./Admin/Home/Dashboard/ContactPage";
import Form from "./Admin/Form/Form";
import VerifyOtp from "./Admin/Form/VerifyOtp";
import axios from "./axios";
import UserSetting from "./User/UserSetting";
import OwnerAccountSettings from "./Owner/OwnerAccountSettings/OwnerAccount";
import OwnerBankDetails from "./Owner/OwnerAccountSettings/OwnerBankDetails";
import OwnerPaymentPending from "./Owner/OwnerBookings/PaymentPending";
import OwnerBookingPending from "./Owner/OwnerBookings/BookingPending";
import OwnerApproved from "./Owner/OwnerBookings/Approved";
import OwnerPaymentHistory from "./Owner/OwnerEarning/PaymentHistory";
import UserBookingApproved from "./User/UserBooking/BookingApproved";
import UserBookingSent from "./User/UserBooking/BookingSent";
import UserPaymentPending from "./User/UserBooking/PaymentPending";
import UserWishlist from "./User/UserWishList/index";
import UserAccountSetting from "./User/UserSetting/index";
import UserNavbar from "./User/UserNavbar";
import CampUserForm1 from "./CampListForm/CampUserForm1";
import CampUserForm2 from "./CampListForm/CampUserForm2";
import CampUserForm3 from "./CampListForm/CampUserForm3";
import CampUserForm4 from "./CampListForm/campUserForm4";
import CampUserForm5 from "./CampListForm/CampUserForm5";
import Maps from "./GoogleMap";
import HomePage from "./HomePage";
import SpecificCamp from "./SpecificCampDetail";
import Pending from "./Admin/Home/Dashboard/Booking/Pending";
import Accepted from "./Admin/Home/Dashboard/Booking/Accepted";
import Rejected from "./Admin/Home/Dashboard/Booking/Rejected";
import Icons from "./SpecificCampDetail/icons/icons";
import AdminHeader from "./Header/admin";
import UserHeader from "./Header/user";
import OwnerHeader from "./Header/owner";
import HomeNavbar from "./Header/home";
import UserBookingRejected from "./User/UserBooking/Rejected";
import Practice1 from "./Practice";

const { setUser, setOwner, setAdmin } = actions;

const App = (props) => {
  useEffect(() => {
    const checkLoggedIn = async () => {
      let type;
      let token = localStorage.getItem("auth-token");
      if (token) {
        let tokenRes = await axios.get("/auth", {
          headers: { Authorization: token },
        });

        if (tokenRes.data === "jwt expired") {
          localStorage.clear();
        }

        try {
          tokenRes = await axios.get("/auth", {
            headers: { Authorization: token },
          });
          type = "user";
        } catch {
          return null;
        }
        if (tokenRes.data === "") {
          tokenRes = await axios.get("/owner/auth", {
            headers: { Authorization: token },
          });
          type = "owner";
        }
        if (tokenRes.data === "") {
          tokenRes = await axios.get("/admin/auth", {
            headers: { Authorization: token },
          });
          type = "admin";
        }

        if (type === "user") {
          await props.setUser(tokenRes.data);
        }
        if (type === "owner") {
          await props.setOwner(tokenRes.data);
        }
        if (type === "admin") {
          await props.setAdmin(tokenRes.data);
        }
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/practice">
            <Practice1 />
          </Route>

          <Route
            exact
            path="/CampUserForm1"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerHeader />
                    <CampUserForm1 />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/SpecificCamp"
            render={() => {
              if (props?.owner?.user) {
                return (
                  <>
                    <OwnerHeader />
                    <SpecificCamp />
                  </>
                );
              } else if (props?.user?.user?.firstname) {
                return (
                  <>
                    <UserHeader />
                    <SpecificCamp />
                  </>
                );
              } else if (props?.admin?.user) {
                return (
                  <>
                    <AdminHeader />
                    <SpecificCamp />
                  </>
                );
              } else {
                return (
                  <>
                    <HomeNavbar />
                    <SpecificCamp />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm2"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerHeader />
                    <CampUserForm2 />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm3"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerHeader />
                    <CampUserForm3 />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm4"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerHeader />
                    <CampUserForm4 />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm5"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerHeader />
                    <CampUserForm5 />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/User__Account__settings"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserAccountSetting />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/User__Booking__Sent"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserBookingSent />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Select__Particular__User"
            render={() => {
              return (
                <>
                  <SelectUser />
                </>
              );
            }}
          />
          <Route
            exact
            path="/User__Booking__Rejected"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserBookingRejected />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/User__Payment__Pending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserPaymentPending />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/User__Wishlist"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserWishlist />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/User__Booking__Approved"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserBookingApproved />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/Account__Settings"
            render={() => {
              return (
                <>
                  <OwnerAccountSettings />
                </>
              );
            }}
          />

          <Route
            exact
            path="/Owner__Bookings/Bank__Details"
            render={() => {
              return (
                <>
                  <OwnerBankDetails />
                </>
              );
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/PaymentPending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerPaymentPending />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/BookingPending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerBookingPending />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/Approved"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerApproved />
                  </>
                );
              }
            }}
          />

          <Route
            exact
            path="/Owner__Bookings/Payment__History"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerPaymentHistory />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking/Pending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Pending />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking/Accepted"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Accepted />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking/Rejected"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Rejected />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Delete__Admin__camp/Active__Camps"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Active__Camps />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Delete__Admin__camp/Deleted__Camps"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Deleted__Camps />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Admin__Account__settings"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Account__Setting__Admin />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/Messages"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Contact_Page />
                  </>
                );
              }
            }}
          />
          <Route exact path="/CampOwner">
            <CampOwner />
          </Route>
          <Route exact path="/CampUser">
            <CampUser />
          </Route>
          <Route exact path="/Verifying">
            <VerifyOtp />
          </Route>
          <Route
            exact
            path="/ZGjfyXgcbXRAxvKYsyJNTLlezLbzuXvhWNJFYOYiPOHntXGMeMchfzIlHOyLqNgryTbujWFxZGjfyXgcbXBafyLBgQfmQhiiIJVycOIfjrnBEwf"
          >
            <Form />
          </Route>
          <Route exact path="/maps">
            <Maps />
          </Route>
          <Route
            exact
            path="/"
            render={() => {
              if (props?.owner?.user) {
                return (
                  <>
                    <OwnerHeader />
                    <HomePage />
                  </>
                );
              } else if (props?.user?.user?.firstname) {
                return (
                  <>
                    <UserHeader />
                    <HomePage />
                  </>
                );
              } else if (props?.admin?.user) {
                return (
                  <>
                    <AdminHeader />
                    <HomePage />
                  </>
                );
              } else {
                return (
                  <>
                    <HomeNavbar />
                    <HomePage />
                  </>
                );
              }
            }}
          />
        </Switch>
      </Router>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    admin: state.admin,
    owner: state.owner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (data) => {
      dispatch(setUser(data));
    },
    setOwner: (data) => {
      dispatch(setOwner(data));
    },
    setAdmin: (data) => {
      dispatch(setAdmin(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

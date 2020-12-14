import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CampUser.css";
import { connect } from "react-redux";
import actions from "../Redux/Action";
import axios from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const {
  setUser,
  setCurrentUser,
  clearCurrentUser,
  clearOwner,
  clearAdmin,
} = actions;

toast.configure();

function Index(props) {
  const history = useHistory();
  const handleClicks = () => {
    // var blur = document.getElementById("select__user__blur");
    // blur.classList.toggle("select__user__active");
    // var popup = document.getElementById("select__user__popup");
    // popup.classList.toggle("select__user__active");
    history.push("/");
  };

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
    eMail: "",
    Password: "",
  });

  const handleClick = (e, type) => {
    e.preventDefault();
    if (type === "signUp") {
      document
        .getElementById("select__user__container")
        .classList.add("select__user__right-panel-active");
    } else if (type === "signIn") {
      document
        .getElementById("select__user__container")
        .classList.remove("select__user__right-panel-active");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e, type) => {
    e.preventDefault();
    if (type === "signUp") {
      await axios
        .post("/signup", input)
        .then((res) => {
          props.clearOwner();
          props.clearAdmin();
          props.clearCurrentUser();
          props.setUser(res.data.user);
          localStorage.setItem("auth-token", res.data.token);
          toast.info(`Account Created`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          history.push("/");
          setInput({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            address: "",
            mobile: "",
          });
        })
        .catch((err) => {
          toast.error(`${err.response.data}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
    if (type === "signIn") {
      let { eMail, Password } = input;
      await axios
        .post("/login", {
          email: eMail,
          password: Password,
        })
        .then((res) => {
          props.clearOwner();
          props.clearAdmin();
          props.clearCurrentUser();
          props.setUser(res.data.user);
          localStorage.setItem("auth-token", res.data.token);
          toast.info(`Signed In`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setInput({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            address: "",
            mobile: "",
          });
          history.push("/");
        })
        .catch((err) => {
          toast.error(`Camp User Not Found`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
  };
  return (
    <div id="campUser1">
      <div className="camp__user__body"></div>
      <div id="Camp__user__popup" className="Camp__user__active">
        <form className="select__user__form">
          <div
            className="select__user__container select__user__right-panel-active"
            id="select__user__container"
          >
            <div className="select__user__form-container select__user__sign-up-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                  padding: "10px",
                }}
                onClick={handleClicks}
              >
                X
              </span>
              <form className="select__user__form" action="#">
                <h1 className="select__user__h1" style={{ color: "black" }}>
                  Create Account
                </h1>
                <br />
                <br />
                <br />
                <span className="select__user__span">
                  or use your email for registration
                </span>
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="First Name"
                  name="firstname"
                  required
                />
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Last Name"
                  name="lastname"
                  required
                />
                <input
                  className="select__user__input"
                  type="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  name="email"
                  required
                />
                <input
                  className="select__user__input"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                  required
                />
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  name="mobile"
                  required
                />
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Address"
                  name="address"
                  required
                />
                <button
                  className="select__user__button"
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signUp")}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div class="select__user__form-container select__user__sign-in-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                  padding: "10px",
                }}
                className="select__user__span"
                onClick={handleClicks}
              >
                X
              </span>
              <form className="select__user__form" action="#">
                <h1 className="select__user__h1" style={{ color: "black" }}>
                  Sign in
                </h1>
                <br />
                <br />
                <br />
                <span className="select__user__span">or use your account</span>
                <input
                  className="select__user__input"
                  name="eMail"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  className="select__user__input"
                  name="Password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <a className="select__user__a" href="#">
                  Forgot your password?
                </a>
                <button
                  className="select__user__button"
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signIn")}
                >
                  Sign In
                </button>
              </form>
            </div>
            <div class="select__user__overlay-container">
              <div class="select__user__overlay">
                <div class="select__user__overlay-panel select__user__overlay-left">
                  <h1 className="select__user__h1">Welcome To Lamp-Camp!</h1>
                  <p className="select__user__p">
                    Please enter your valid email address and mobile number.
                  </p>
                  <button
                    class="select__user__button select__user__ghost"
                    id="select__user__signIn"
                    onClick={(e) => {
                      handleClick(e, "signIn");
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div class="select__user__overlay-panel select__user__overlay-right">
                  <h1 className="select__user__h1">Welcome To Lamp-Camp!</h1>
                  <p className="select__user__p">
                    Please enter your Email address and Password.
                  </p>
                  <button
                    class="select__user__button select__user__ghost"
                    id="select__user__signUp"
                    onClick={(e) => {
                      handleClick(e, "signUp");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (data) => {
      dispatch(setUser(data));
    },
    clearAdmin: () => {
      dispatch(clearAdmin());
    },
    clearCurrentUser: () => {
      dispatch(clearCurrentUser());
    },
    clearOwner: () => {
      dispatch(clearOwner());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

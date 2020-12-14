import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Form.css";
import axios from "../../axios";
import { connect } from "react-redux";
import actions from "../../Redux/Action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const { setAdmin } = actions;

function Index(props) {
  const history = useHistory();
  const handleClicks = () => {
    // var blur = document.getElementById("select__user__blur");
    // blur.classList.toggle("select__user__active");
    // var popup = document.getElementById("select__owner__popup");
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
        .post("/admin/signup", input)
        .then((res) => {
          props.setAdmin(res.data.user);
          localStorage.setItem("auth-token", res.data.token);
          toast.info(`${res.data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          setInput({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            address: "",
            mobile: "",
          });
          history.push("/Admin__Booking/Accepted");
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
        .post("/admin/login", {
          email: eMail,
          password: Password,
          mobile: "918421723980",
        })
        .then((res) => {
          if (res.data.otp.status == "open") {
            props.setAdmin({
              email: eMail,
              password: Password,
              otp_id: res.data.otp.otp_id,
              mobile: res.data.user.mobile,
            });
            setInput({
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              address: "",
              mobile: "",
            });
            toast.info(`Otp is sent to your Mobile Number`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
            });
            history.push("/Verifying");
          }
          // props.setAdmin(res.data.user);
          // localStorage.setItem("auth-token", res.data.token);
          // alert(res.data.message);
          // history.push("/loggedInUser");
        })
        .catch((err) => {
          toast.error(`Please, Enter Valid Email & Password!!`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://images.wallpaperscraft.com/image/tent_camping_mountains_166927_1280x720.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
      }}
    >
      <div id="Camp__Owner__popup">
        <form className="select__user__form">
          <div class="select__user__container" id="select__user__container">
            <div class="select__user__form-container select__user__sign-up-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                  padding: 10,
                }}
                className="select__user__span"
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
                  onChange={handleChange}
                  placeholder="First Name"
                  name="firstname"
                />
                <input
                  className="select__user__input"
                  onChange={handleChange}
                  placeholder="Last Name"
                  name="lastname"
                />
                <input
                  className="select__user__input"
                  type="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  name="email"
                />
                <input
                  className="select__user__input"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                />
                <input
                  className="select__user__input"
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  name="mobile"
                />
                <input
                  className="select__user__input"
                  onChange={handleChange}
                  placeholder="Address"
                  name="address"
                />
                <button
                  className="select__admin__button"
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
                  className="select__admin__button"
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signIn")}
                >
                  Sign In
                </button>
              </form>
            </div>
            <div class="select__user__overlay-container">
              <div class="select__admin__overlay">
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
    admin: state.admin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAdmin: (data) => {
      dispatch(setAdmin(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

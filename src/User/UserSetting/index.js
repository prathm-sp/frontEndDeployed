import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../../Redux/Action";
import axios from "../../axios";
import Navbar from "../../Header/user";

import "./style.css";
import { Divider, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { clearUser, clearOwner, clearAdmin } = actions;

function Index(props) {
  const [input, setInput] = useState();
  const [confirm, setConfirm] = useState();
  var [change, setChange] = useState("");
  var [client, setClient] = useState();

  useEffect(() => {
    if (props.admin.user) {
      setClient(() => ({ type: "admin", user: props.admin.user }));
    } else if (props.user.user) {
      setClient(() => ({ type: "user", user: props.user.user }));
    } else if (props.owner.user) {
      setClient(() => ({ type: "owner", user: props.owner.user }));
    }
  }, []);

  const handleClick = (e, type) => {
    if (type === "password") {
      setChange(undefined);
    } else {
      setChange(type);
    }
    setInput({
      newDetail: "",
      oldPassword: "",
      password: "",
      confirmPassword: "",
    });
    var blur = document.getElementById("Account__setting__blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("Account__setting__popup");
    popup.classList.toggle("active");

    if (type == "delete") {
      var blur = document.getElementById("Account__setting__blur");
      blur.classList.toggle("active");
      var popup__delete = document.getElementById("confirm__delete__popup");
      popup__delete.classList.toggle("active__delete");
    }
  };
  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (client.type == "user") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/update_profile", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.info(`${change} updated`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
    if (client.type == "owner") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/owner/updateuser", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.info(`${change} updated`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
    if (client.type == "admin") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/admin/updateuser", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.info(`${change} updated`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (client.type == "user") {
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/update_password", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            toast.info(`Password Changed Successfully`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            toast.error(`Something Went Wrong`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
            });
          });
      } else {
        toast.error(`Password didn't match`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
    if (client.type == "owner") {
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/owner/updatepassword", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            toast.info(`Password Changed Successfully`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            toast.error(`Something Went Wrong`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
            });
          });
      } else {
        toast.error(`Password didn't match`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
    if (client.type == "admin") {
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/admin/updatepassword", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            toast.info(`Password Changed Successfully`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            toast.error(`Something Went Wrong`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
            });
          });
      } else {
        toast.error(`Password didn't match`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [change]: value,
    });
  };

  const handlePasswordChange = (e, type) => {
    e.preventDefault();
    const { value } = e.target;

    if (type == 1) {
      setInput(value);
    }
    if (type == 2) {
      setConfirm(value);
    }
  };

  const deleteAccount = () => {
    if (client.type == "user") {
      let token = localStorage.getItem("auth-token");
      axios
        .delete("/delete_user", {
          headers: { Authorization: token },
        })
        .then((res) => {
          props.clearAdmin();
          props.clearOwner();
          props.clearUser();
        })
        .catch((err) => {});
    }
    if (client.type == "owner") {
      let token = localStorage.getItem("auth-token");
      axios
        .delete("/owner/updateuser", {
          headers: { Authorization: token },
        })
        .then((res) => {
          props.clearAdmin();
          props.clearOwner();
          props.clearUser();
        })
        .catch((err) => {});
    }
    if (client.type == "admin") {
      let token = localStorage.getItem("auth-token");
      axios
        .delete("/admin/updateuser", {
          headers: { Authorization: token },
        })
        .then((res) => {
          props.clearAdmin();
          props.clearOwner();
          props.clearUser();
        })
        .catch((err) => {});
    }
  };

  const handleDeleteClick = () => {
    var blur = document.getElementById("Account__setting__blur");
    blur.classList.toggle("active");
    var popup__delete = document.getElementById("confirm__delete__popup");
    popup__delete.classList.toggle("active__delete");
  };

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
                    to="/User__Booking__Sent"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">Booking Sent</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link to="/User__Wishlist" style={{ textDecoration: "none" }}>
                    <span className="subHeader">Your WishList</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/User__Account__settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="mainHeader">Account Settings</span>
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
              }}
            >
              Account Settings
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid item xs={1}></Grid>
        <div className="Account__setting">
          <div className="sub__setting" id="Account__setting__blur">
            <span
              style={{ fontSize: 20, fontWeight: "bolder", color: "white" }}
            >
              Account Setting
            </span>

            <br />
            <label>First Name</label>
            <br />
            <input
              value={client?.user?.firstname}
              name="firstname"
              onChange={handleChange}
            />
            <button onClick={(e) => handleClick(e, "firstname")}>change</button>
            <br />
            <label>Last Name</label>
            <br />
            <input
              value={client?.user?.lastname}
              name="lastname"
              onChange={handleChange}
            />
            <button onClick={(e) => handleClick(e, "lastname")}>change</button>
            <br />
            <label>Email</label>
            <br />
            <input
              value={client?.user?.email}
              name="email"
              onChange={handleChange}
            />
            <button onClick={(e) => handleClick(e, "email")}>change</button>
            <br />
            <label>Password</label>
            <br />
            <input type="password" value={"password"} />
            <button onClick={(e) => handleClick(e, "password")}>change</button>
            <br />
            <label>Mobile no</label>
            <br />
            <input
              value={client?.user?.mobile}
              name="mobile"
              onChange={handleChange}
            />
            <button onClick={(e) => handleClick(e, "mobile")}>change</button>
            <br />
            <label>Address</label>
            <br />
            <input
              value={client?.user?.address}
              name="address"
              onChange={handleChange}
            />
            <button onClick={(e) => handleClick(e, "address")}>change</button>
            <br />
            <button id="delete" onClick={handleDeleteClick}>
              Delete My Account
            </button>
          </div>
          <div className="selected__input" id="Account__setting__popup">
            {change ? (
              <>
                <form className="selected__input__form" onSubmit={handleSubmit}>
                  <span
                    onClick={(e) => {
                      handleClick(e, "close__update__form");
                    }}
                  >
                    X{" "}
                  </span>
                  <label>Enter New {change}</label>
                  <br />
                  <input
                    value={input.firstname}
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <button
                    className="selected__input__form__button"
                    type="submit"
                  >
                    update
                  </button>
                </form>
              </>
            ) : (
              <>
                <form
                  className="selected__input__form"
                  onSubmit={handlePasswordSubmit}
                >
                  <span onClick={handleClick}>X </span>

                  <br />
                  <label>enter new Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                      handlePasswordChange(e, 1);
                    }}
                    // value={input.password}
                  />
                  <br />
                  <label>confirm the password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => {
                      handlePasswordChange(e, 2);
                    }}
                    // value={input.confirmPassword}
                  />
                  <br />

                  <button
                    className="selected__input__form__button"
                    type="submit"
                  >
                    change password
                  </button>
                </form>
              </>
            )}
          </div>
          <div className="confirm__delete" id="confirm__delete__popup">
            <span onClick={handleDeleteClick}>X </span>
            <h1>Confirm Delete Account</h1>
            <br />
            <label>
              This will erase all your data from our server, Confirm?
            </label>
            <button
              className="selected__input__form__button"
              onClick={deleteAccount}
              type="submit"
            >
              delete
            </button>
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

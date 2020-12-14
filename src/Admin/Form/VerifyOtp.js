import React, { useState } from "react";
import "./Verfiy.css";
import axios from "../../axios";
import { connect } from "react-redux";
import actions from "../../Redux/Action";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const { setAdmin } = actions;

function VerifyOtp(props) {
  const history = useHistory();
  var [otp, setOtp] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/admin/verify", {
        email: props.admin.user.email,
        password: props.admin.user.password,
        otp_id: props.admin.user.otp_id,
        otp: otp,
      })
      .then((res) => {
        localStorage.setItem("auth-token", res.data.token);
        props.setAdmin(res.data.user);
        toast.info(`Login Success`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
        history.push("/Admin__Booking/Pending");
      })
      .catch((err) => {
        toast.error(`Otp Verification Failed`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      });
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div id="form__verify">
      <form type="submit" className="verfiy__form" onSubmit={handleSubmit}>
        <h1 className="verify__form__h1">Veification Code</h1>
        <label className="verify__form__label">
          Please type the verification code sent to +91
          {props?.admin?.user?.mobile}
        </label>
        <span>
          <input onChange={handleChange} name="otp" type="password" />
        </span>
        <button>submit</button>
        <button>Resend OTP</button>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp);

import React from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
toast.configure();

function Index(props) {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error(`Razorpay SDK failed to load. Are you online?`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });

      return;
    }

    const result = await axios.post("payment/order", {
      booking_id: props?.camp?._id,
    });

    if (!result) {
      toast.error(`Server error. Are you online?`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });

      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_ofe3CfgKY0lM7M", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: props?.camp?.camp?.manager_name,
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        await axios
          .post("/payment/success", data, {
            headers: {
              booking_id: props?.camp?._id,
            },
          })
          .then((res) => {
            toast.info(
              `Congratulations!! Payment is Accepted. See you at CampSite`,
              {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
              }
            );
            window.location.reload(false);
          })
          .catch((err) => {});
      },
      prefill: {
        name: "Lamp A Camp",
        email: "admin@lampacamp.com",
        contact: "8143143143",
      },
      notes: {
        address: props?.camp?.camp_location,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Buy React now!</p>
        <button
          style={{
            background: "transparent",
            borderRadius: "20px",
            width: "50%",
            height: "3rem",
            color: "wheat",
            fontWeight: "bolder",
          }}
          className="App-link"
          onClick={displayRazorpay}
        >
          💰 Pay Rs.{props?.camp?.total_amount}
        </button>
      </header>
    </div>
  );
}

export default Index;

import "./Footer.css";
import axios from "../../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Index() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yes");
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    const email = e.target[0].value;
    const message = e.target[1].value;
    console.log(email);
    console.log(message);
    axios
      .post("/contact/sendMessage", { email: email, message: message })
      .then(async (res) => {
        console.log("res");
        await toast.info(`Message Sent`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        document.getElementById("footerForm").reset();
      })
      .catch(async (err) => {
        await toast.error(`Something Went Wrong`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      });
  };
  console.log("yes");
  return (
    <div className="Apsp">
      <footer>
        <div class="main-content">
          <div class="left box">
            <h2>About us</h2>
            <div class="contents">
              <p style={{ position: "relative", top: "4vh" }}>
                To us, camping is all about finding those extra-special places
                to camp. We're more interested in the location, the view, the
                ambience, and whether it allows campfires.While Camps isn’t
                happening in 2020, we are going back to the drawing board to
                plan experiences at Basecamp that are fun, impactful, and safe.
                Please be on the lookout for more information later this summer.
              </p>
              <div class="social" style={{ position: "relative", top: "8vh" }}>
                <a href="https://facebook.com/">
                  <span
                    style={{ color: "#3b5bf9" }}
                    class="fab fa-facebook-f"
                  ></span>
                </a>
                <a href="#https://twitter.com/">
                  <span
                    style={{ color: "#18d3fd" }}
                    class="fab fa-twitter"
                  ></span>
                </a>
                <a href="https://instagram.com/">
                  <span
                    style={{ color: "#e43655" }}
                    class="fab fa-instagram"
                  ></span>
                </a>
                <a href="https://youtube.com/">
                  <span style={{ color: "red" }} class="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="center box">
            <h2>Address</h2>
            <div class="content">
              <div class="place">
                <span class="fas fa-map-marker-alt"></span>
                <span class="text">Maharashtra , India</span>
              </div>
              <div class="phone">
                <span class="fas fa-phone-alt"></span>
                <span class="text">+91 8454838483</span>
              </div>
              <div class="email">
                <span class="fas fa-envelope"></span>
                <span class="text">prathmesh@gmail.com</span>
              </div>
            </div>
          </div>
          <div class="right box">
            <h2>Contact us</h2>
            <div class="content">
              <form onSubmit={handleSubmit} id="footerForm">
                <div class="email">
                  <div class="text">Email *</div>
                  <input name="email" type="email" required />
                </div>
                <div class="msg">
                  <div class="text" name="message">
                    Message *
                  </div>
                  <textarea id="msgForm" rows="2" cols="25" required></textarea>
                  <br />
                  <div class="btn">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;

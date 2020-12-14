import React from "react";
import { useHistory } from "react-router";
import "./Style.css";

function Index() {
  const history = useHistory();
  const handleClicks = () => {
    // var blur = document.getElementById("select__user__blur");
    // blur.classList.toggle("select__user__active");
    // var popup = document.getElementById("select__user__popup");
    // popup.classList.toggle("select__user__active");
    history.push("/CampUser");
  };
  return (
    <div className="select__user__bodys">
      <div className="select__user__body"></div>
      <div class="select__user__button_container" id="select__user__blur">
        <div class="select__user__select__container">
          <h1 className="select__user__description select__user__h1">
            Sign In As
          </h1>
          <br />
          <br />
          <br />
          <br />
          <button
            id="select__user__client"
            className="select__user__btn"
            onClick={() => {
              history.push("/CampUser");
            }}
          >
            <span className="select__user__span" id="select__user__s1">
              Camp Visitor
            </span>
          </button>
          <br />
          <br />
          <button
            id="select__user__owner"
            className="select__user__btn"
            onClick={() => {
              history.push("/CampOwner");
            }}
          >
            <span className="select__user__span" id="select__user__s2">
              Camp Owner
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;

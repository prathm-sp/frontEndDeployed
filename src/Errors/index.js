import React from "react";
import "../App.css";

export default function Errors(props) {
  return (
    <div className="errors">
      <span>{props.message}</span>
      <button id="exit" onClick={props.clearError}>
        X
      </button>
    </div>
  );
}

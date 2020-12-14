import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

toast.configure();
function index() {
  return (
    <div className="mainPractice">
      <div class="boxPractice ">
        <h2>
          4<span class="zero"></span>4{" "}
        </h2>
      </div>
    </div>
  );
}

export default index;

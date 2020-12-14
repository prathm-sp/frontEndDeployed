import React from "react";
import "./style.css";

function ImageCombo(props) {
  return (
    <>
      <h1
        style={{
          marginLeft: "41vw",
          fontSize: "48px",
          marginBottom: "4vh",
          color: "#e3e0f9",
        }}
      >
        Popular Camps
      </h1>
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title">{props.camp[0]?.camp_name}</h4>
                  <p class="card-text" style={{}}>
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city
                  </p>
                  <button type="button" class="btn btn-warning">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-4">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title">{props.camp[0]?.camp_name}</h4>
                  <p class="card-text" style={{}}>
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city
                  </p>
                  <button type="button" class="btn btn-warning">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-4">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title">{props.camp[0]?.camp_name}</h4>
                  <p class="card-text" style={{}}>
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city,Mumbai is the best city,Mumbai is
                    Mumbai is the best city
                  </p>
                  <button type="button" class="btn btn-warning">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCombo;

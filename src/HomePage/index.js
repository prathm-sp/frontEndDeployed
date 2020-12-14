import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";
import actions from "../Redux/Action";
import Footer from "../Admin/Footer/Footer";
import "./style.css";
import axios from "../axios";

const { setCampAmenities, setSpecific } = actions;

function Index(props) {
  const history = useHistory();
  var [recentCamps, setRecentCamps] = useState([]);
  var [trendingCamps, setTrendingCamps] = useState([]);
  var [allCamps, setAllCamps] = useState([]);
  useEffect(() => {
    axios.get("/get_recent_camps").then((res) => {
      setRecentCamps(res.data);
    });
    axios.get("/get_trending_camps").then((res) => {
      setTrendingCamps(res.data);
    });
    axios.get("/admin/get_all_camps").then((res) => {
      setAllCamps(res.data);
    });
  }, []);

  const handleClick = async (campName) => {
    let camp_name = campName;
    let token = localStorage.getItem("auth-token");

    axios
      .get("/get_a_camp", {
        method: "GET",
        headers: {
          Authorization: token,
          camp_name: campName,
        },
      })
      .then((res) => {
        props.setSpecific(res.data);
        localStorage.setItem("specific", props.specificCamp);
        history.push("/specificCamp");
      });
  };

  return (
    <div className="main">
      <div
        id="carousel-example-2"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
          <li data-target="#carousel-example-2" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="First slide"
              />
              <div class="mask rgba-black-light"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Second slide"
              />
              <div class="mask rgba-black-strong"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Third slide"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.pexels.com/photos/2526025/pexels-photo-2526025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Fourth slide"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <h1
                  style={{
                    marginLeft: "41vw",
                    fontSize: "48px",
                    marginBottom: "4vh",
                    color: "#e3e0f9",
                  }}
                >
                  Recent Camps
                </h1>
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={recentCamps[0]?.camp_images[0]}
                            class="card-img-top photos"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {recentCamps[0]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: recentCamps[0]?.camp_desc,
                                }}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={(e) =>
                                handleClick(recentCamps[0]?.camp_name)
                              }
                              style={{ marginTop: "1rem" }}
                              class="btn btn-warning"
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={recentCamps[1]?.camp_images[0]}
                            class="card-img-top photos"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {" "}
                              {recentCamps[1]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: recentCamps[1]?.camp_desc,
                                }}
                              />
                            </div>
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(recentCamps[1]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={recentCamps[2]?.camp_images[0]}
                            class="card-img-top photos"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {" "}
                              {recentCamps[2]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: recentCamps[2]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(recentCamps[2]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src={recentCamps[3]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {recentCamps[3]?.camp_name}
                            </h4>{" "}
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: recentCamps[3]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(recentCamps[3]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src={recentCamps[4]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {recentCamps[4]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: recentCamps[4]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(recentCamps[4]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src={recentCamps[5]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {recentCamps[5]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: recentCamps[5]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(recentCamps[5]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#inam" class="carousel-control-prev " data-slide="prev">
                <span class="carousel-control-prev-icon mr-5"></span>
              </a>
              <a href="#inam" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon ml-5 "></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam2" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <h1
                  style={{
                    marginLeft: "41vw",
                    fontSize: "48px",
                    marginBottom: "4vh",
                    color: "#e3e0f9",
                  }}
                >
                  Trending Camps
                </h1>
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={trendingCamps[0]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {trendingCamps[0]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: trendingCamps[0]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(trendingCamps[0]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={trendingCamps[1]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {trendingCamps[1]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: trendingCamps[1]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(trendingCamps[1]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={trendingCamps[2]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {" "}
                              {trendingCamps[2]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: trendingCamps[2]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(trendingCamps[2]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src={trendingCamps[3]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {trendingCamps[3]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: trendingCamps[3]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(trendingCamps[3]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src={trendingCamps[4]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {trendingCamps[4]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: trendingCamps[4]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(trendingCamps[4]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src={trendingCamps[5]?.camp_images[0]}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4
                              class="card-title"
                              style={{ maxHeight: "2rem", overflow: "hidden" }}
                            >
                              {trendingCamps[5]?.camp_name}
                            </h4>
                            <div
                              style={{ maxHeight: "12rem", overflow: "hidden" }}
                            >
                              {" "}
                              <div
                                class="card-text"
                                dangerouslySetInnerHTML={{
                                  __html: trendingCamps[5]?.camp_desc,
                                }}
                              />
                            </div>{" "}
                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{ marginTop: "1rem" }}
                              onClick={(e) =>
                                handleClick(trendingCamps[5]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#inam2" class="carousel-control-prev " data-slide="prev">
                <span class="carousel-control-prev-icon mr-5"></span>
              </a>
              <a href="#inam2" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon ml-5 "></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{
          marginLeft: "41vw",
          fontSize: "48px",
          marginBottom: "4vh",
          color: "#e3e0f9",
        }}
      >
        All Camps
      </h1>
      <div className="allCamps">
        <div style={{ display: "flex", width: "59%", flexWrap: "wrap" }}>
          {allCamps.map((item) => (
            <div class="col-sm-12 col-lg-4" style={{ marginTop: "2rem" }}>
              <div class="card ">
                <img src={item?.camp_images[0]} class="card-img-top" />
                <div class="card-body">
                  <h4
                    class="card-title"
                    style={{ maxHeight: "2rem", overflow: "hidden" }}
                  >
                    {item?.camp_name}
                  </h4>
                  <div style={{ maxHeight: "12rem", overflow: "hidden" }}>
                    <div
                      class="card-text"
                      dangerouslySetInnerHTML={{
                        __html: item?.camp_desc,
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{ marginTop: "1rem" }}
                    onClick={(e) => handleClick(item?.camp_name)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campAmenities: state.campAmenities,
    specificCamp: state.specificCamp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampAmenities: (data) => {
      dispatch(setCampAmenities(data));
    },
    setSpecific: (data) => {
      dispatch(setSpecific(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

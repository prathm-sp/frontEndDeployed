import React from "react";
import { Link } from "react-router-dom";

function Nabar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mr-2">
              <a class="nav-link " href="#">
                Blog <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item dropdown mr-5  active">
              <a
                class="nav-link dropdown mr-5"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <div
                class="dropdown-menu  "
                style={{ marginRight: 10 }}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item  " to="/campUser">
                  Camper Login
                </Link>
                <Link class="dropdown-item  " to="/campOwner">
                  Campowner Login
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nabar;

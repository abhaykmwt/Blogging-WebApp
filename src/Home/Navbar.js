import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'

function Navbar() {
  return (
    <div style={{ marginTop: "px" }}>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand bold" href="/">
            AkTechBlogging
          </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li class="nav-item dt-5">
                <a class="nav-link active bold " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active bold"
                  aria-current="page"
                  href="Blogs"
                >
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active bold"
                  aria-current="page"
                  href="About"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active bold"
                  aria-current="page"
                  href="Contact"
                >
                  Contact us
                </a>
              </li>
      </ul>
  
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;

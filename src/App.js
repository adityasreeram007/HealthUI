import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
class App extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-md bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      Home
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    <Link
                      to="/timeline"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      Timeline
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="analytics">
                    <Link
                      to="/analytics"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Analytics
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </>
    );
  }
}

export default App;

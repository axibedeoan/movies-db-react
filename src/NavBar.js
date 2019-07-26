import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "./List";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Router>
        <div className="NavBar-bar">
          <div className="NavBar-item">
            <Link to="/movies/">Movies</Link>
          </div>
          <div className="NavBar-item">
            <Link to="/tvshows/">TV Shows</Link>
          </div>

          <Route path="/movies/" component={() => <List type={"movie"} />} />
          <Route path="/tvshows/" component={() => <List type={"tv"} />} />
        </div>
      </Router>
    </div>
  );
}

export default NavBar;

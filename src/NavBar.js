import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "./List";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Router>
        <ul className="navbar">
            <img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="81" height="72" />
            <li><Link className="item" to="/movies/">Movies</Link></li>
            <li><Link className="item" to="/tvshows/">TV Shows</Link></li>

            <Route path="/movies/" component={() => <List type={"movie"} />} />
            <Route path="/tvshows/" component={() => <List type={"tv"} />} />
        </ul>
        </Router>      
    </div>
  );
}

export default NavBar;

/* <div>
<img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="81" height="72" />
</div> */
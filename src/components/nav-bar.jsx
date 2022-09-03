import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container justify-content-between">
          <span
            style={{ fontSize: 50, cursor: "pointer" }}
            className="navbar-brand m-0 h1"
          >
            Zetflix
          </span>

          <ul className="nav mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: "white" }}>
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/register"
                style={{ color: "white" }}
              >
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/movies"
                style={{ color: "white" }}
              >
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/addMovies"
                style={{ color: "white" }}
              >
                Add Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

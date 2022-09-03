import { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container d-flex justify-content-between">
          <ul className="nav mb-2 mb-md-0 d-flex justify-content-between">
            <li className="nav-item">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to="/owner"
              >
                Owner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to="/details"
              >
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to="/bank-an-account"
              >
                Bank an account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

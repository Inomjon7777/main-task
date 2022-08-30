import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/header" style={{ textDecoration: "none" }}>
            <h1>
              CodingBat <span>code practice</span>
            </h1>
          </Link>

          <p>
            Welcome to Codingbat. See <a href="##">help</a> for the latest.
          </p>
        </div>
        <div className="validation">
          <ul className="ul">
            {["about", "help", "code help+videos", "done", "prefs"].map(
              (item) => (
                <li>{item}</li>
              )
            )}
          </ul>
          <form>
            <label htmlFor="email">
              id/email
              <input type="email" />
            </label>
            <label htmlFor="password">
              password
              <input type="password" />
            </label>
            <button>log in</button>
            <ul>
              <Link to="reset-password" style={{ textDecoration: "none" }}>
                forgot password
              </Link>
              <Link
                to="sign-up"
                style={{
                  textDecoration: "none",
                  marginLeft: "1rem",
                  borderLeft: "1px solid #0000dd",
                  paddingLeft: "1rem",
                }}
              >
                create accaunt
              </Link>
            </ul>
          </form>
        </div>
      </header>
    );
  }
}

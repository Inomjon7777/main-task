import React, { Component } from "react";

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <h1>
            CodingBat <span>code practice</span>
          </h1>
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
              {["forgot password", "create account"].map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </form>
        </div>
      </header>
    );
  }
}

import React, { Component } from "react";

import Header from "./../../components/header/header";

import "./forgot-password.scss";
import "./../../components/header/header.scss";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="forgot-password-wrapper">
        <Header />
        <h3>
          <b>Password Reset</b>
        </h3>
        <form>
          <label>id/email</label>
          <input type="password" />
          <button className="reset">Send Password Reset</button>
        </form>
        <p>
          This will send an email with a temporary password to the account email
          address. When you get the email, log in with the temporary password,
          and go to the prefs page to enter a new password. If the email does
          not arrive, double-check that the email address above is entered
          correctly.
        </p>
        <h3>
          <b>Mozilla Persona</b>
        </h3>
        <p>
          Unfortunately Mozilla ended the Persona project, but you can use the
          reset form above to log in to your account and set a password.
        </p>
        <span>Copyright Nick Parlante 2017 - privacy</span>
      </div>
    );
  }
}

import React, { Component } from "react";
import Header from "./../../components/header/header";

import "./create-accaunt.scss";
import "./../../components/header/header.scss";

export default class CreateAccaunt extends Component {
  render() {
    return (
      <div className="create-account-wrapper">
        <Header />

        <h3>
          <b>Create Account</b>
        </h3>
        <p>
          Please enter information to create a new account. We use your email
          address as your id just so it's memorable and for password reset, not
          for spamming. New accounts automatically pick up any saved or done
          problems of the current session. The name field is not required, but
          with the Teacher Share feature, it can help the teacher see who is
          who. The password should have at least 6 characters.
        </p>
        <form>
          <label></label>
          <div className="email">
            <label>Email (used as account id)</label>
            <input type="email" />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="password" />
            <button>show/hide</button>
          </div>
          <button className="create-accaunt">Create Accaunt</button>
        </form>
        <span>privacy statement</span>
      </div>
    );
  }
}

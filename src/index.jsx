import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/index.scss";

import App from "./app";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import ConfirmationCode from "./components/registration/confirmationCode/confirmationCode";
import Congratulation from "./components/registration/congratulationCode/congratulation";
import Opportunities from "./components/opportunities/opportunities";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmationCode" element={<ConfirmationCode />} />
      <Route path="/congratulation" element={<Congratulation />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

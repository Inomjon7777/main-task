import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/index.scss";

import App from "./app";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

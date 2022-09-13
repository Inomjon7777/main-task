import React from "react";
import { Link } from "react-router-dom";
import Login from "./../login/login";

const Home = () => {
  return (
    <div>
      home page
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Home;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Opportunities from "./components/opportunities/opportunities";
import Advantages from "./components/advantages/advantages";
import Tariffs from "./components/tariffs/tariffs";
import Connection from "./components/connection/connection";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Opportunities />
      <Advantages />
      <Tariffs />
      <Connection />
      <Footer />
    </div>
  );
};

export default App;

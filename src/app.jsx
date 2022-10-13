import React from "react";

// Components
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Opportunities from "./components/opportunities/opportunities";
import Advantages from "./components/advantages/advantages";
import Tariffs from "./components/tariffs/tariffs";
import Connection from "./components/connection/connection";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Opportunities />
      <Advantages />
      <Tariffs />
      <Connection />
      <Footer />
    </>
  );
};

export default App;

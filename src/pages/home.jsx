import React, { Component } from "react";

const Home = () => {
  return (
    <>
      <header>
        <div id="showcase">
          <div className="container">
            <div className="showcase-content">
              <h1>
                <span className="text-primary">Enjoy</span>Your Stay
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat inventore exercitationem harum quas, suscipit rerum
                possimus maiores consectetur qui maxime.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="home-info" className="bg-dark">
        <div className="info-img"></div>
        <div className="info-content">
          <h2>
            <span className="text-primary">The history</span> Of our hotel
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, a nisi praesentium tempora obcaecati explicabo in
            unde fugit! Ea necessitatibus quasi consequatur ipsa, aut error
            dolore dolorum molestias libero molestiae, cupiditate corrupti
            reiciendis dolor expedita enim explicabo, ab laborum ex praesentium
            esse nisi vero voluptates ipsum exercitationem. Sequi, earum
            tenetur!
          </p>
          <a href="about.html" className="btn btn-light">
            Read More
          </a>
        </div>
      </section>

      <section id="features">
        <div className="box bg-light">
          <i className="fas fa-hotel fa-3x"></i>
          <h3>Great Location</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            numquam?
          </p>
        </div>
        <div className="box bg-primary">
          <i className="fas fa-utensils fa-3x"></i>
          <h3>Free Meals</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            numquam?
          </p>
        </div>
        <div className="box bg-light">
          <i className="fas fa-dumbbell fa-3x"></i>
          <h3>Fitness Room</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            numquam?
          </p>
        </div>
      </section>
      <div className="clr"></div>

      <footer id="main-footer">
        <p>Hotel BT &copy; 2022, All rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;

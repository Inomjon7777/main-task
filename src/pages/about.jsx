import React, { Component } from "react";

import hotel from "./../assets/images/hotel.jpg";
import person1 from "./../assets/images/person-1.jpg";
import person2 from "./../assets/images/person-2.jpg";

const About = () => {
  return (
    <>
      <header>
        <section id="about-info">
          <div className="container">
            <div className="info-left">
              <h1>
                <span className="text-primary">About </span>Our Hotel
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ipsa, deleniti temporibus fugiat eveniet illo suscipit
                dolorum! Mollitia animi maiores, consequuntur eaque dicta saepe
                inventore tempora incidunt quisquam voluptas? Laborum.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                porro autem velit dignissimos eaque aperiam minima minus natus
                rerum hic.
              </p>
            </div>
            <div className="info-right">
              <img src={hotel} alt="our beautiful hotel" />
            </div>
          </div>
        </section>
        <div className="clr"></div>

        <section id="testimonials">
          <div className="container">
            <h2>What Our Guests Say ?</h2>
            <div className="testimonial bg-primary">
              <img src={person1} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt enim magnam dolor saepe a obcaecati unde dignissimos
                quis fugit commodi velit at nemo et iusto, accusantium minus,
                laudantium veniam quasi ipsam, tempora voluptatem dolorem soluta
                molestias quos. Saepe, nam iste. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Laboriosam aliquid a corporis
                quis. Dolorem officia vero debitis incidunt at error.
              </p>
            </div>
            <div className="testimonial bg-primary">
              <img src={person2} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt enim magnam dolor saepe a obcaecati unde dignissimos
                quis fugit commodi velit at nemo et iusto, accusantium minus,
                laudantium veniam quasi ipsam, tempora voluptatem dolorem soluta
                molestias quos. Saepe, nam iste. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Distinctio, dolorem vero nemo
                optio laborum adipisci modi odit enim minus quis.
              </p>
            </div>
          </div>
        </section>
      </header>

      <footer id="main-footer">
        <p>Hotel BT &copy; 2022, All rights Reserved</p>
      </footer>
    </>
  );
};

export default About;

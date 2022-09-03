import React, { Component } from "react";

const Contact = () => {
  return (
    <>
      <section id="contact-form">
        <div className="container">
          <h1>
            <span className="text-primary">Conntact</span> Us
          </h1>
          <p>Please fill out the form below to contact us</p>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea type="text" id="message" name="message"></textarea>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </section>

      <section id="contact-info" className="bg-dark">
        <div className="container">
          <div className="box">
            <i className="fas fa-hotel fa-3x"></i>
            <h3>Locations</h3>
            <p>123, Main st, New York, NY</p>
          </div>
          <div className="box">
            <i className="fas fa-phone fa-3x"></i>
            <h3>Phone Number</h3>
            <p>(347) 779 7709</p>
          </div>
          <div className="box">
            <i className="fas fa-hotel fa-3x"></i>
            <h3>Email</h3>
            <p>info@hbthotel.com</p>
          </div>
        </div>
      </section>
      <div className="clr"></div>

      <footer id="main-footer">
        <p>Hotel BT &copy; 2022, All rights Reserved</p>
      </footer>
    </>
  );
};

export default Contact;

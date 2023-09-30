import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="body">
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">
                <Link to="/">TutorFinder</Link>
              </span>
            </div>
            <div className="media-icons">
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://facebook.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://facebook.com">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <a href="https://wa.me/+923487613204">Contact us</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Insight</li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/termsTutor">T&C for Tutors</Link>
              </li>
              <li>
                <Link to="/termsStudents">T&C for Students</Link>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text text-center">
              Copyright &#169; 2023 TutorFinder. All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

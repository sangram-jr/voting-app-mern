import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { CgInstagram } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Name Section */}
        <div className="footer-column">
          <h2 className="footer-title">OnlineVoting</h2>
          <p>
          OnlineVoting is a digital platform 
          that enables voters to cast their ballots 
          electronically, offering convenience 
          and accessibility. 
          </p>
        </div>

        {/* Office Section */}
        <div className="footer-column">
          <h2 className="footer-title">Office</h2>
          <p>Nirvachan Sadan,</p>
          <p>New Delhi,Ashoke Road,India</p>
          <p>Zip Code: 123456</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/dashboard">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-column">
          <h2 className="footer-title">Follow Us</h2>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <CgInstagram />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;



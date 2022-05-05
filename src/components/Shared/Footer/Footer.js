import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import logo from "../../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className=" mt-5 py-4 border-4">
      <div className="border-top-dark">
        <div className="container  d-flex justify-content-between">
          <img src={logo} height={50} alt="" />
          <ul className="social-link d-md-flex">
            <li>
              <BsFacebook className="text-primary" />
              <a href="https://web.facebook.com/sb.shohagh.0/">Facebook</a>
            </li>
            <li>
              <BsInstagram className="text-danger" />
              <a href="https://www.instagram.com/sb_shohagh/">Instagram</a>
            </li>
            <li>
              <BsTwitter className="text-primary" />
              <a href="https://twitter.com/sb_shohagh">Twitter</a>
            </li>
            <li>
              <BsLinkedin className="text-primary" />
              <a href="https://www.linkedin.com/in/md-shohagh-7a0890227/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="container  text-white text-center">
          <p>
            <small>
              Copyright SB Dress Empress &copy; {year} All Rights Reserved
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

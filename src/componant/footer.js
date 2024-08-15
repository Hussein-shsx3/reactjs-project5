import React from "react";

const Footer = () => {
  return (
    <div id="Footer">
      <img src="./img/logo.svg" alt="" />
      <div className="social_link">
        <a href="#Home">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#Home">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#Home">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

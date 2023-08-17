import React from "react";
import "./header.css";
const Header = () => {
  function m() {
    const nav = document.getElementById("res");
    nav.classList.add("act");
    document.getElementById("bar").style.display = "none";
  }
  function c() {
    const nav = document.getElementById("res");
    nav.classList.remove("act");
    document.getElementById("bar").style.display = "flex";
  }
  return (
    <header>
      <img src="./img/logo.svg" alt="" />
      <div id="res">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        </ul>
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
        <button className="button type1">
          <span className="btn-txt">Let's Connect</span>
        </button>
        <i className="fa-solid fa-xmark" onClick={c}></i>
      </div>
      <i id="bar" className="fas fa-outdent" onClick={m}></i>
    </header>
  );
};

export default Header;

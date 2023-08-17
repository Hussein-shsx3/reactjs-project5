import React from "react";

const Home = () => {
  return (
    <div id="Home">
      <div id="Home__1">
        <h2>Welcome to my Protolio</h2>
        <h1>Hi! I'm Hussein Web Developer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          nostrum ullam voluptatem tempore accusantium veniam blanditiis maxime
          non, possimus sequi impedit ratione eius dolorum, maxime non,Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Earum non,adipisci
          cupiditate. Consequatur vel eum ducimus?
        </p>
        <button className="learn-more">
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Let's Connect</span>
        </button>
      </div>
      <img src="./img/header-img.svg" alt="" />
    </div>
  );
};

export default Home;

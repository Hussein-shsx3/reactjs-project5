import React from "react";
import "./page.css";
const Page = (props) => {
  return (
    <div id="Page">
      <img src={props.img} alt="" />
      <div id="Page__1">
        <h2>Business Startup</h2>
        <h4>Design & Development</h4>
      </div>
      <div id="shadow"></div>
    </div>
  );
};

export default Page;

import React from "react";
import Page from "../componant/page";
import Fade from "react-reveal/Fade";
const Projects = () => {
  function a() {
    document.getElementById("cover-1").style.transform = "translateX(0px)";
    document.getElementById("cover-2").style.transform = "translateX(-100%)";
    document.getElementById("cover-3").style.transform = "translateX(-100%)";
    document.getElementById("Pages").style.display = "flex";
    document.getElementById("lorem").style.display = "none";
  }
  function b() {
    document.getElementById("cover-1").style.transform = "translateX(-100%)";
    document.getElementById("cover-2").style.transform = "translateX(0px)";
    document.getElementById("cover-3").style.transform = "translateX(-100%)";
    document.getElementById("Pages").style.display = "none";
    document.getElementById("lorem").style.display = "flex";
  }
  function c() {
    document.getElementById("cover-1").style.transform = "translateX(-100%)";
    document.getElementById("cover-2").style.transform = "translateX(-100%)";
    document.getElementById("cover-3").style.transform = "translateX(0px)";
    document.getElementById("Pages").style.display = "none";
    document.getElementById("lorem").style.display = "flex";
  }
  return (
    <div id="Projects">
      <Fade bottom>
        <h1>Projects</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
          magnam voluptates dicta asperiores et natus perferendis obcaecati
          dolorum recusandae ab incidunt vero possimu smagnam voluptates dicta
          asperiores et natus aut illum fuga temporibus asperiores et natus
          perferendis repellendus accusamus porro!
        </p>
        <div id="Tabs">
          <button id="Tab__1" onClick={a}>
            <div id="cover-1" className="active"></div>Tab 1
          </button>
          <button id="Tab__2" onClick={b}>
            <div id="cover-2"></div>Tab 2
          </button>
          <button id="Tab__3" onClick={c}>
            <div id="cover-3"></div>Tab 3
          </button>
        </div>
        <div id="Pages">
          <Page img="./img/project-img1.png" />
          <Page img="./img/project-img2.png" />
          <Page img="./img/project-img3.png" />
          <Page img="./img/project-img1.png" />
          <Page img="./img/project-img2.png" />
          <Page img="./img/project-img3.png" />
        </div>
        <div id="lorem">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          nulla sequi deleniti nemo non exercitationem repellat quibusdam
          placeat perspiciatis? Quis eius velit ut enim quod possimus quidem ea
          voluptatem tenetur. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ducimus nulla sequi deleniti nemo non exercitationem
          repellat quibusdam placeat perspiciatis? Quis eius velit ut enim quod
          possimus quidem ea voluptatem tenetur.
        </div>
      </Fade>
    </div>
  );
};

export default Projects;

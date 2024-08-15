import React from "react";
import Fade from "react-reveal/Fade";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = () => {
  return (
    <div id="Skills">
      <Fade bottom>
        <div id="Skills__1">
          <h1>Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            quas debitis officia voluptatum! Dolorum voluptas fugiat beatae iure
            amet illo reiciendis iusto quisquam ullam velit hic a quo, eos
            incidunt.
          </p>
          <div id="slider">
            <div id="Card">
              <img src="./img/meter1.svg" alt="" />
              <h3>Logo Design</h3>
            </div>
            <div id="Card">
              <img src="./img/meter2.svg" alt="" />
              <h3>Logo Design</h3>
            </div>
            <div id="Card">
              <img src="./img/meter3.svg" alt="" />
              <h3>Logo Design</h3>
            </div>
            <div id="Card">
              <img src="./img/meter1.svg" alt="" />
              <h3>Logo Design</h3>
            </div>
          
          
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;

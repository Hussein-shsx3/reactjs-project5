import React from "react";
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <div id="Contact">
      <Fade bottom >
        <img src="./img/contact-img.svg" alt="" />
        <div id="Contact__1">
          <h1>Get In Touch</h1>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone No." required />
            <textarea
              name="Message"
              id="Message"
              cols="65"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button id="Send">Send</button>
          </form>
        </div>
        <div id="email">
          <p>Subscribe to our Newsletter & Never miss latest updates</p>
          <div id="email__1">
            <input type="email" placeholder="Email Address" />
            <button id="Submit">Submit</button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;

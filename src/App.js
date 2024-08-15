import React from "react";
import Header from "./componant/header";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Project from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./componant/footer";

const App = () => {
  return (
    <div id="App">
      <Header />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import News from './components/noticias/Noticias.js'
import About from "./components/About/About.js";
import Compromiso from "./components/compromiso/Compromiso.js";
import Contact from './components/contact/Contact.js';
import Header from './components/header/Header.js'
import Slider from './components/slider/Slider.js'

function App() {
  return (
    <>
    <div className="App">
      <Header/> 
      <Compromiso/>
      <About/>
      {/* <Slider/> */}
       <News/> 
      <Contact/>
    </div></>
  );
}

export default App;

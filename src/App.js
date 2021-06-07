import './App.css';
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Work from "./components/Work";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About /> 
      <Work />
      <Footer />
    </div>
  );
}

export default App;
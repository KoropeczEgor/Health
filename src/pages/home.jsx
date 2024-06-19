import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/hero";
import Info from "../components/info/info";
import About from "../components/about/about";
import BookAppointment from "../components/bookAppointment";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
    </div>
  );
};

export default Home;

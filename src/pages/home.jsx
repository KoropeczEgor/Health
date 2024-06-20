import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/hero";
import Info from "../components/info/info";
import About from "../components/about/about";
import BookAppointment from "../components/bookAppointment";
import Reviews from "../components/reviews";
import Doctors from "../components/doctors";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
    </div>
  );
};

export default Home;

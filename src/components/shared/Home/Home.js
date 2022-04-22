import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import HomeInformation from "./Home/HomeHomeInformation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <HomeInformation />
      <Footer />
    </div>
  );
};

export default Home;

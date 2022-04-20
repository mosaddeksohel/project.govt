import React, { useEffect, useState } from "react";
import Slide from "./Slide";

const Banner = () => {
  const [bannerSlide, setBanner] = useState([]);
  useEffect(() => {
    fetch("upzonline.e71solution.xyz/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <div>
      {bannerSlide.map((banner) => (
        <Slide banner={banner}></Slide>
      ))}
    </div>
  );
};

export default Banner;

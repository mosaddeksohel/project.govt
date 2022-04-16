import React, { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    fetch("upzonline.e71solution.xyz/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return <div>{}</div>;
};

export default Banner;

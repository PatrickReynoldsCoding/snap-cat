import React, { useState, useEffect } from "react";

// Components
import HomeContainer from "../components/HomeContainer";
import Logo from "@/components/Logo";

//Functions
import { getCatData } from "./api/getCatData";

export default function Home() {
  // State variables to store cat fact and image
  const [catFact, setCatFact] = useState(null);
  const [catImage, setCatImage] = useState(null);

  // Use useEffect hook to call getCatData function
  useEffect(() => {
    getCatData()
      .then(([fact, image]) => {
        // Set catFact and catImage state with data returned from getCatData
        setCatFact(fact);
        setCatImage(image);
      })
      .catch((error) => console.error(error));
    console.log(catFact);
    console.log(catImage);
  }, []);

  return (
    <>
      <Logo />
      <HomeContainer />
    </>
  );
}

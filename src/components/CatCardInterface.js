import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

// Components
import CatCardContainer from "./CatCardContainer";
import NewCatButton from "./NewCatButton";

//Functions
import { getCatData } from "@/pages/api/getCatData";

export default function CatCardInterface() {
  // State variables to store cat fact and image
  const [catFact, setCatFact] = useState(null);
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // handler to pull data
  const handleClick = async () => {
    setLoading(true);
    getCatData()
      .then(([fact, image]) => {
        // Set catFact and catImage state with data returned from getCatData
        setCatFact(fact);
        setCatImage(image);
      })
      .catch((error) => console.error(error));
    setLoading(false);
  };

  return (
    <div className={styles["cat-card-interface"]}>
      {loading && <p>Loading...</p>}{" "}
      {/* Show a loading message while data is being fetched */}
      {catFact && catImage && (
        <CatCardContainer catFact={catFact} catImage={catImage} />
      )}
      <NewCatButton handleClick={handleClick} />
    </div>
  );
}

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

  // handler to pull data
  const handleClick = () => {
    getCatData()
      .then(([fact, image]) => {
        // Set catFact and catImage state with data returned from getCatData
        setCatFact(fact);
        setCatImage(image);
      })
      .catch((error) => console.error(error));
  };

  // useEffect hook to call handleClick only when button is clicked
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className={styles["cat-card-interface"]}>
      {catFact?.fact && catImage?.url && (
        <CatCardContainer catFact={catFact} catImage={catImage} />
      )}
      <NewCatButton onClick={handleClick} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

// Components
import CatCardContainer from "./CatCardContainer";
import NewCatButton from "./NewCatButton";

//Functions
import { getCatData } from "@/pages/api/getCatData";

export default function CatCardInterface() {
  // State to store array of cat card data
  const [catCards, setCatCards] = useState([]);
  // Used to only load component once the api data has loaded
  const [loading, setLoading] = useState(false);
  // Used to disable button to spamming multiple clicks
  const [buttonEnabler, setButtonEnabler] = useState(true);

  // handler to pull data
  const handleClick = async () => {
    setButtonEnabler(false);
    setLoading(true);
    getCatData()
      .then(([fact, image]) => {
        // Add new cat card data to the array
        setCatCards([...catCards, { fact, image }]);
      })
      .catch((error) => console.error(error));
    setLoading(false);
    setButtonEnabler(true);
  };

  return (
    <div className={styles["cat-card-interface"]}>
      {loading && <p>Loading...</p>}{" "}
      {/* Show a loading message while data is being fetched */}
      {catCards.length > 0 && <CatCardContainer catCards={catCards} />}
      <NewCatButton handleClick={handleClick} enabled={buttonEnabler} />
    </div>
  );
}

import React from "react";
import styles from "@/styles/Home.module.css";

// Components
import CatCardImage from "./CatCardImage";
import CatCardFact from "./CatCardFact";

//dummy api data
const fetchedCatImage = {
  id: "b7d",
  url: "https://cdn2.thecatapi.com/images/b7d.jpg",
  width: 500,
  height: 334,
};
export default function CatCard() {
  return (
    <div className={styles["cat-card"]}>
      <CatCardImage fetchedCatImage={fetchedCatImage} />
      <CatCardFact />
    </div>
  );
}

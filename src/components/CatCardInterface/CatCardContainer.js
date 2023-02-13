import React from "react";
import styles from "@/styles/Home.module.css";

// Components
import CatCard from "./Cards/CatCard";

export default function CatCardContainer(props) {
  return (
    <div className={styles["cat-card-container"]}>
      {props.catCards.map((carCard, index) => (
        <CatCard
          key={index}
          catFact={carCard.fact}
          catImage={carCard.image[0]}
        />
      ))}
    </div>
  );
}

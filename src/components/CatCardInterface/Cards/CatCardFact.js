import React from "react";
import styles from "@/styles/Home.module.css";

export default function CatCardFact(props) {
  // Used in case the pulled fact is too large for the container
  const backUpFact =
    "The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.";
  return (
    <div className={styles["cat-card-fact"]}>
      <div className={styles["cat-card-fact-text-container"]}>
        <h1>Cat fact</h1>
        <h2>Hope you find it furscinating!</h2>
        <p>
          {props.fetchedCatFact.length > 150
            ? backUpFact
            : props.fetchedCatFact.fact}
        </p>
      </div>
    </div>
  );
}

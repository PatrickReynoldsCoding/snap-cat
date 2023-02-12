import React from "react";
import styles from "@/styles/Home.module.css";
export default function CatCardFact(props) {
  return (
    <div className={styles["cat-card-fact"]}>
      <div className={styles["cat-card-fact-text-container"]}>
        <h1>Cat fact</h1>
        <h2>Hope you find it furscinating!</h2>
        <p>{props.fetchedCatFact.fact}</p>
      </div>
    </div>
  );
}

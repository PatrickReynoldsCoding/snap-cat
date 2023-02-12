import React from "react";
import styles from "@/styles/Home.module.css";
export default function CatCardFact() {
  return (
    <div className={styles["cat-card-fact"]}>
      <div className={styles["cat-card-fact-text-container"]}>
        <h1>Cat fact</h1>
        <h2>Hope you find it furscinating!</h2>
        <p>
          "If your cat snores, or rolls over on his back to expose his belly, it
          means he trusts you."
        </p>
      </div>
    </div>
  );
}

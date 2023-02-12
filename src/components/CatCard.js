import React from "react";
import styles from "@/styles/Home.module.css";
export default function CatCard() {
  return (
    <div className={styles["cat-card"]}>
      <div className={styles["cat-card-image"]}></div>;
      <div className={styles["cat-card-fact"]}></div>;
    </div>
  );
}

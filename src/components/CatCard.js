import React from "react";
import styles from "@/styles/Home.module.css";

// Components
import CatCardImage from "./CatCardImage";
import CatCardFact from "./CatCardFact";
export default function CatCard() {
  return (
    <div className={styles["cat-card"]}>
      <CatCardImage />
      <CatCardFact />
    </div>
  );
}

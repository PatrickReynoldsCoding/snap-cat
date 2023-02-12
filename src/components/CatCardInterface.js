import React from "react";
import styles from "@/styles/Home.module.css";
// Components
import CatCardContainer from "./CatCardContainer";
export default function CatCardInterface() {
  return (
    <div className={styles["cat-card-interface"]}>
      <CatCardContainer />
    </div>
  );
}

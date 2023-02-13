import React from "react";
import styles from "@/styles/Home.module.css";

// Components
import CatCardInterface from "./CatCardInterface/CatCardInterface";

export default function HomeContainer() {
  return (
    <div className={styles["home-container"]}>
      <CatCardInterface />
    </div>
  );
}

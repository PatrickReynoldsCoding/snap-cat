import React from "react";
import styles from "@/styles/Home.module.css";

//components
import CatCard from "./CatCard";
export default function CatCardContainer() {
  return (
    <div className={styles["cat-card-container"]}>
      <CatCard />
    </div>
  );
}

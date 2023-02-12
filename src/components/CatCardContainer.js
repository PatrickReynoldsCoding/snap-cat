import React from "react";
import styles from "@/styles/Home.module.css";

//components
import CatCard from "./CatCard";
export default function CatCardContainer(props) {
  return (
    <div className={styles["cat-card-container"]}>
      <CatCard catFact={props.catFact} catImage={props.catImage} />
    </div>
  );
}

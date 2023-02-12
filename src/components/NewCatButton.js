import React from "react";
import styles from "@/styles/Home.module.css";

export default function NewCatButton(props) {
  return (
    <button className={styles["new-cat-button"]} onClick={props.handleClick}>
      <div className={styles["new-cat-button-cross-symbol"]}></div>
      <div className={styles["new-cat-button-text"]}>New Cat</div>
      {/* <div className={styles["new-cat-button-icon"]}></div>
      <div className={styles["new-cat-button-text"]}></div> */}
    </button>
  );
}

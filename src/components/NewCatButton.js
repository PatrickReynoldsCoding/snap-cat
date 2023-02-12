import React from "react";
import styles from "@/styles/Home.module.css";

export default function NewCatButton(props) {
  const handleClick = () => {
    if (props.enabled) props.handleClick();
  };
  return (
    <button className={styles["new-cat-button"]} onClick={handleClick}>
      <div className={styles["new-cat-button-cross-symbol"]}></div>
      <div className={styles["new-cat-button-text"]}>New Cat</div>
      {/* <div className={styles["new-cat-button-icon"]}></div>
      <div className={styles["new-cat-button-text"]}></div> */}
    </button>
  );
}

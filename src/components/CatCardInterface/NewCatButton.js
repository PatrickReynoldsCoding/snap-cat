import React from "react";
import styles from "@/styles/Home.module.css";

export default function NewCatButton(props) {
  // Function to trigger APIs and load state on click
  const handleClick = () => {
    if (props.enabled) props.handleClick();
  };
  return (
    <button className={styles["new-cat-button"]} onClick={handleClick}>
      <div className={styles["new-cat-button-cross-symbol"]}></div>
      <div className={styles["new-cat-button-text"]}>New Cat</div>
    </button>
  );
}

import React from "react";
import styles from "@/styles/Home.module.css";

export default function NewCatButton() {
  return (
    <div className={styles["new-cat-button"]}>
      <div className={styles["new-cat-button-icon"]}></div>;
      <div className={styles["new-cat-button-text"]}></div>;
    </div>
  );
}

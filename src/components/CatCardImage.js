import React from "react";
import styles from "@/styles/Home.module.css";
export default function CatCardImage() {
  return (
    <div className={styles["cat-card-image"]}>
      <img src="https://cdn2.thecatapi.com/images/dav.jpg"></img>
    </div>
  );
}

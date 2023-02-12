import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function CatCardImage(props) {
  return (
    <div className={styles["cat-card-image-container"]}>
      <Image
        className={styles["cat-card-image"]}
        src={props.fetchedCatImage.url}
        alt="Random cat image"
        width={props.fetchedCatImage.width}
        height={props.fetchedCatImage.height}
      />
    </div>
  );
}

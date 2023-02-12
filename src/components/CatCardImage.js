import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function CatCardImage() {
  return (
    <div className={styles["cat-card-image"]}>
      <Image
        src="https://cdn2.thecatapi.com/images/dav.jpg"
        alt="Random cat image"
      />
    </div>
  );
}

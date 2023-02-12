import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import logo from "../../public/images/snapcatlogo.png";
export default function Logo() {
  return (
    <div
      className={styles["logo-container"]}
      onClick={() => window.location.reload(false)}
    >
      <Image
        className={styles["logo-image"]}
        src={logo}
        alt="SnapCat Logo"
        width={221}
        height={107}
      />
    </div>
  );
}

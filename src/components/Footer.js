import React from "react";
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p>Created by Patrick Reynolds</p>
      <br />
      <p>
        Email:{" "}
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=PatrickReynolds@gmail.com&su=Hi%20Paddy&body=&tf=cm">
          PatrickReynolds@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/PatrickReynoldsCoding/">
          https://github.com/PatrickReynoldsCoding/
        </a>
      </p>
      <p>
        Personal site:{" "}
        <a href="https://PatrickReynolds.dev">PatrickReynolds.dev</a>
      </p>
    </footer>
  );
}

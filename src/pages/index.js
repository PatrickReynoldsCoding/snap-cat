import React from "react";
import styles from "@/styles/Home.module.css";

// Components
import HomeContainer from "../components/HomeContainer";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <Logo />
      <HomeContainer />
      <Footer />
    </div>
  );
}

import styles from "@/styles/Home.module.css";

// Components
import { HomeWithNavAndFoot } from "@/components/NavAndFooterAdder";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <HomeWithNavAndFoot />
    </div>
  );
}

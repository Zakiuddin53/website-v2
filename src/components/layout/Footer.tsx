import React from "react";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["zubuz-footer-section"]}>
      <div className="container">
        <div className={styles["zubuz-copywright"]}>
          <p>&copy;Copyright 2024, All Rights Reserved by Triangle</p>
        </div>
      </div>
    </footer>
  );
}

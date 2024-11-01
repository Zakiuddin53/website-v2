import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Header.module.css";

export function Header() {
  return (
    <header
      className={`${styles["site-header"]} ${styles["site-header--menu-center"]}`}
      id="sticky-menu"
    >
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles["brand-logo"]}>
            <Link href="/">
              <Image
                src="/assets/images/logo/logo-dark.png"
                alt="Logo"
                width={120}
                height={25}
                className={styles["light-version-logo"]}
                priority
              />
            </Link>
          </div>
          <div className={styles["menu-block-wrapper"]}>
            <div className={styles["menu-overlay"]}></div>
            <nav className={styles["menu-block"]} id="append-menu-header">
              <div className={styles["mobile-menu-head"]}>
                <div className={styles["go-back"]}>
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className={styles["current-menu-title"]}></div>
                <div className={styles["mobile-menu-close"]}>&times;</div>
              </div>
              <ul className={styles["site-menu-main"]}>
                <li className={styles["nav-item"]}>
                  <Link href="/" className={styles["nav-link-item"]}>
                    Home
                  </Link>
                </li>

                <li className={styles["nav-item"]}>
                  <Link href="/portfolio" className={styles["nav-link-item"]}>
                    Portfolio
                  </Link>
                </li>

                <li className={styles["nav-item"]}>
                  <Link href="/contact" className={styles["nav-link-item"]}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={`${styles["mobile-menu-trigger"]} light`}>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

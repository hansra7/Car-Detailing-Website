import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Sidebar Toggle Button */}
      <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar Navigation */}
      <div className={`${styles.sidebar} ${isOpen ? styles.show : ""}`}>
        <ul className={styles.sidebarLinks}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/gallery" className={styles.navLink}>
              Gallery
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/packages" className={styles.navLink}>
              Packages & Pricing
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/book" className={styles.navLink}>
              Book Now
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

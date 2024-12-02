import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Sidebar or Navigation Links */}
      <div className={styles.sidebar}>
        <ul className={styles.sidebarLinks}>
          <li className={styles.navItem}>
            <Link href="#home" scroll={false} className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact" scroll={false} className={styles.navLink}>
              Contact
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#gallery" scroll={false} className={styles.navLink}>
              Gallery
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#interior-services" scroll={false} className={styles.navLink}>
              Interior Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#exterior-services" scroll={false} className={styles.navLink}>
              Exterior Services
            </Link>
          </li>
        </ul>

        {/* Instagram Link */}
        <div className={styles.instagramSection}>
          <a
            href="https://www.instagram.com/luxeproautodetailing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

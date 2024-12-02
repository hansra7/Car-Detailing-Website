import React from 'react';
import Link from 'next/link';
import sidebarLinks from '../data/SidebarData';
import styles from '../styles/Navbar.module.css'; // Import dedicated sidebar styles

const Sidebar = () => {
  return (
    <nav className={styles.sidebar} aria-label="Sidebar Navigation">
      <ul className={styles.sidebarLinks}>
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className={styles.navItem}>
              <Link href={item.path}>
                <div className={styles.navLink}>
                  <Icon className={styles.icon} aria-hidden="true" />
                  <span>{item.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Instagram Section */}
      <div className={styles.instagramSection}>
        <h2 className={styles.instagramHeader}>Follow Us</h2>
        <a
          href="https://www.instagram.com/luxeproautodetailing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramButton}
        >
          Instagram
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
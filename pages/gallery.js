import React from 'react';
import styles from '../styles/Gallery.module.css';
import BeforeAfterFade from '../components/BeforeAfterFade';

const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <h1 className={styles.sectionTitle}>Photo Gallery</h1>

      {/* Interior Deep Cleaning */}
      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>Interior Deep Clean - Front Seats</h2>
        <BeforeAfterFade
          beforeSrc="/tesla-interior-before.jpeg"
          afterSrc="/tesla-interior-after.jpeg"
          alt="Tesla front seats deep clean"
        />
      </div>

      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>Interior Deep Clean - Rear Seats</h2>
        <BeforeAfterFade
          beforeSrc="/lexus-rear-before.jpeg"
          afterSrc="/lexus-rear-after.jpeg"
          alt="Lexus rear seats deep clean"
        />
      </div>

      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>Dashboard & Steering Wheel Cleanup</h2>
        <BeforeAfterFade
          beforeSrc="/toyota-dashboard-before.jpeg"
          afterSrc="/toyota-dashboard-after.jpeg"
          alt="Toyota dashboard and wheel cleaning"
        />
      </div>

      {/* Exterior Premium Detailing */}
      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>Wheel Restoration</h2>
        <BeforeAfterFade
          beforeSrc="/mercedes-wheel-before.jpeg"
          afterSrc="/mercedes-wheel-after.jpeg"
          alt="Mercedes AMG wheel detailing"
        />
      </div>

      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>Paint Enhancement & Ceramic Coating</h2>
        <BeforeAfterFade
          beforeSrc="/exterior-detail-before.jpeg"
          afterSrc="/exterior-detail-after.jpeg"
          alt="Exterior premium detailing"
        />
      </div>

      {/* Trunk & Cargo Area */}
      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>SUV Trunk Cleaning</h2>
        <BeforeAfterFade
          beforeSrc="/g-wagon-trunk-before.jpeg"
          afterSrc="/g-wagon-trunk-after.jpeg"
          alt="G-Wagon trunk cleaning"
        />
      </div>

      <div className={styles.beforeAfterContainer}>
        <h2 className={styles.subTitle}>Carpet Steaming & Vacuuming</h2>
        <BeforeAfterFade
          beforeSrc="/rav4-trunk-before.jpeg"
          afterSrc="/rav4-trunk-after.jpeg"
          alt="Toyota RAV4 trunk cleaning"
        />
      </div>
    </section>
  );
};

export default Gallery;

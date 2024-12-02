import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/InteriorServices.module.css';

const InteriorServices = () => {
  return (
    <>
      <Head>
        <title>Interior Services | Luxe Detailing</title>
        <meta
          name="description"
          content="Explore our premium interior detailing services, including deep clean packages for an immaculate interior."
        />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Interior Services</h1>

        {/* Deep Clean Interior Package Section */}
        <section id="deep-clean" className={styles.packageSection}>
          <h2 className={styles.packageTitle}>Deep Clean Interior Package</h2>
          <p className={styles.packageDetails}>
            <strong>Duration:</strong> ~8 hours | <strong>Price:</strong> $200-$350
          </p>
          <ul className={styles.description}>
            <li>Thorough vacuum and steam clean.</li>
            <li>Condition leather and plastic surfaces.</li>
            <li>Remove tough stains from carpets and upholstery.</li>
            <li>Deodorize for a fresh, clean scent.</li>
          </ul>
          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              <h3>Before</h3>
              <Image
                src="/deep-clean-before.jpeg"
                alt="Deep Clean Interior Package - Before"
                width={400}
                height={300}
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.imageWrapper}>
              <h3>After</h3>
              <Image
                src="/deep-clean-after.jpeg"
                alt="Deep Clean Interior Package - After"
                width={400}
                height={300}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InteriorServices;

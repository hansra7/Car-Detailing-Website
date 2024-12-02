import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/HomePage.module.css';
import Contact from './Contact';
import Gallery from './gallery';

const Index = () => {
  const homeSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Home | Luxe Detailing</title>
        <meta
          name="description"
          content="Mobile car detailing from the comfort of your own home. Paint correction and ceramic coating specialists in Columbus, OH."
        />
      </Head>
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section id="home" ref={homeSectionRef} className={styles.heroSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/GWagonIndexfile.jpeg"
              alt="Car detailing hero image"
              fill
              style={{ objectFit: 'cover' }}
              quality={90}
              className={styles.heroImage}
            />
            <div className={styles.overlayText}>
              <h1 className={styles.heroTitle}>
                MOBILE CAR DETAILING FROM THE COMFORT OF YOUR OWN HOME.
              </h1>
              <p className={styles.heroSubtitle}>
                PAINT CORRECTION AND CERAMIC COATING SPECIALISTS IN COLUMBUS, OH
              </p>
              <button
                className={styles.quoteButton}
                onClick={() => scrollToSection(contactSectionRef)}
              >
                Quote/Book
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactSectionRef}
          className={styles.section}
        >
          <Contact />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={styles.section}>
          <Gallery />
        </section>

        {/* Interior Services Section */}
        <section id="interior-services" className={styles.section}>
          <h1 className={styles.sectionTitle}>Interior Services</h1>

          {/* Deep Clean Interior Package */}
          <div id="deep-clean" className={styles.packageSection}>
            <h2 className={styles.packageTitle}>Deep Clean Interior Package</h2>
            <p className={styles.packageDetails}>
              <strong>Duration:</strong> ~8 hours | <strong>Price:</strong>{' '}
              $200-$350
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
          </div>
        </section>

        {/* Exterior Services Section */}
        <section id="exterior-services" className={styles.section}>
          <h1 className={styles.sectionTitle}>Exterior Services</h1>
          <p>Detailing, paint correction, and ceramic coating specialists.</p>
        </section>
      </main>
    </>
  );
};

export default Index;
import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/HomePage.module.css';
import Contact from './contact';
import Gallery from './gallery';
import Packages from './packages';
import Book from './book';
import About from './about';

const Index = () => {
  const homeSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const packagesSectionRef = useRef(null);
  const bookSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

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
        <section id="contact" ref={contactSectionRef} className={styles.section}>
          <Contact />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={styles.section}>
          <Gallery />
        </section>

        {/* Packages & Pricing Section */}
        <section id="packages" ref={packagesSectionRef} className={styles.section}>
          <Packages />
        </section>

        {/* Book Now Section */}
        <section id="book" ref={bookSectionRef} className={styles.section}>
          <Book />
        </section>

        {/* About Us Section */}
        <section id="about" ref={aboutSectionRef} className={styles.section}>
          <About />
        </section>
      </main>
    </>
  );
};

export default Index;

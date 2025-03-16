import React from 'react';
import Head from 'next/head';
import styles from '../styles/HomePage.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Luxe Detailing</title>
      </Head>
      <div className={styles.section}>
        <h1>About Luxe Detailing</h1>
        <p>We are a mobile car detailing company providing high-end services in Columbus, OH.</p>
        <p>Our mission is to bring professional detailing to your doorstep, ensuring your car looks its best at all times.</p>
      </div>
    </>
  );
};

export default About;

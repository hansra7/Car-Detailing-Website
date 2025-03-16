import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BeforeAfterCarousel from '../components/BeforeAfterCarousel'; // Ensure the path to the component is correct
import styles from '../styles/InteriorServices.module.css';

const packages = [
  {
    id: 'standard',
    title: 'Standard Interior Detail',
    duration: '~3 hours',
    price: '$80-$130',
    description: [
      'Thorough vacuum, including trunk.',
      'Clean all interior surfaces.',
      'Wash floor mats (WeatherTech or carpet).',
      'Clean windows and mirrors.',
      'Final touch-ups for a pristine look.',
    ],
    slides: [
      { before: '/images/interior-standard-before.jpg', after: '/images/interior-standard-after.jpg' },
    ],
  },
  {
    id: 'restorative',
    title: 'Restorative Interior Detail',
    duration: '~6 hours',
    price: '$140-$260',
    description: [
      'Shampoo and extract carpets and cloth seats.',
      'Thorough vacuum, including trunk.',
      'Clean and protect floor mats.',
      'Clean all interior surfaces (plastic, leather, vinyl).',
      'Clean windows and mirrors (streak-free).',
      'Optional Rain-X water repellent.',
    ],
    slides: [
      { before: '/images/interior-restorative-before1.jpg', after: '/images/interior-restorative-after1.jpg' },
      { before: '/images/interior-restorative-before2.jpg', after: '/images/interior-restorative-after2.jpg' },
    ],
  },
  {
    id: 'maintenance',
    title: 'Monthly Maintenance Package',
    duration: 'Ongoing',
    price: '$100/month',
    description: [
      'Exterior wash combined with the Standard Interior Detail package.',
      'Keeps your car pristine on a monthly basis.',
      '*Requires a Restorative Interior Detail prior to enrollment.',
    ],
    slides: [
      { before: '/images/interior-maintenance-before.jpg', after: '/images/interior-maintenance-after.jpg' },
    ],
  },
];

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
        <p className={styles.intro}>
          Whether you need a quick clean or a deep restorative detail, our interior packages are designed to meet your
          car’s needs. Explore our offerings below:
        </p>

        {/* Render Packages Dynamically */}
        {packages.map((pkg) => (
          <section key={pkg.id} id={pkg.id} className={styles.packageSection}>
            <h2 className={styles.packageTitle}>{pkg.title}</h2>
            <p className={styles.packageDetails}>
              <strong>Duration:</strong> {pkg.duration} | <strong>Price:</strong> {pkg.price}
            </p>
            <ul className={styles.description}>
              {pkg.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Carousel Component */}
            <BeforeAfterCarousel slides={pkg.slides} />
          </section>
        ))}
      </main>
    </>
  );
};

export default InteriorServices;

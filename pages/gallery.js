import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const images = [
    { src: '/Nanascar.jpeg', alt: 'Nanascar' },
    { src: '/BlueBMW.jpeg', alt: 'Blue BMW' },
    { src: '/RedTundra.jpeg', alt: 'Red Tundra' },
    { src: '/WhiteMercedes.jpeg', alt: 'White Mercedes' },
    { src: '/GWagon.jpeg', alt: 'G-Wagon' },
    { src: '/WhiteToyota.jpeg', alt: 'White Toyota' },
    { src: '/GWagonIndexfile.jpeg', alt: 'G-Wagon Index' },
  ];

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Gallery</h1>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              style={{ objectFit: 'cover', borderRadius: '8px' }} // Use new style prop
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

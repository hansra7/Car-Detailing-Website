import React, { useState } from 'react';
import styles from '../styles/BeforeAfterFade.module.css';
import Image from 'next/image';

const BeforeAfterFade = ({ beforeSrc, afterSrc, alt }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div
      className={styles.beforeAfterContainer}
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onClick={() => setShowAfter(!showAfter)} // Toggle on tap for mobile
    >
      {/* Before Image */}
      <div className={`${styles.imageContainer} ${showAfter ? styles.hidden : ''}`}>
        <Image
          src={beforeSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* After Image */}
      <div className={`${styles.imageContainer} ${showAfter ? styles.visible : ''}`}>
        <Image
          src={afterSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BeforeAfterFade;

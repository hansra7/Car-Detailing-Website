import React from 'react';
import Head from 'next/head';
import styles from '../styles/HomePage.module.css';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Luxe Detailing</title>
      </Head>
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Contact Us</h1>
        
        <div className={styles.contactDetails}>
          <div className={styles.contactInfo}>
            <h2>Our Address</h2>
            <p>1509 Lockbourne Road</p>
            <p>Columbus, OH 43206</p>
            <p>United States</p>
          </div>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>Email: <a href="mailto:info@luxedetailing.com">info@luxedetailing.com</a></p>
            <p>Phone: <a href="tel:+15854482996">(585) 448-2996</a></p>
          </div>
        </div>
        
        <h2 className={styles.formTitle}>Request a Quote</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <label>First Name:</label>
              <input type="text" name="firstName" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name:</label>
              <input type="text" name="lastName" required className={styles.inputField} />
            </div>
          </div>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <label>Phone:</label>
              <input type="tel" name="phone" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input type="email" name="email" required className={styles.inputField} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Message:</label>
            <textarea name="message" rows="4" required className={styles.textareaField}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

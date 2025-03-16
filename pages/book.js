import React from 'react';
import Head from 'next/head';
import styles from '../styles/HomePage.module.css';

const Book = () => {
  return (
    <>
      <Head>
        <title>Book | Luxe Detailing</title>
      </Head>
      <div className={styles.section}>
        <h1>Book a Detailing Appointment</h1>
        <p>Fill out the form to schedule your car detailing appointment.</p>
        <form className={styles.bookingForm}>
          <label>First Name:</label>
          <input type="text" name="firstName" required />
          
          <label>Last Name:</label>
          <input type="text" name="lastName" required />

          <label>Phone:</label>
          <input type="tel" name="phone" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Preferred Date:</label>
          <input type="date" name="date" required />

          <label>Service Type:</label>
          <select name="service">
            <option value="interior">Interior Detailing</option>
            <option value="exterior">Exterior Detailing</option>
            <option value="full">Full Service</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Book;

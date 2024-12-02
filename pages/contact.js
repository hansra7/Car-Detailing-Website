import React, { useState } from 'react';
import styles from '../styles/ContactPage.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (response.ok) {
      alert('Your message has been sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    } else {
      alert('Failed to send your message. Please try again later.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Us</h1>

      {/* Contact Info Section */}
      <div className={styles.contactSection}>
        <h2 className={styles.subHeading}>Our Address</h2>
        <p>1509 Lockbourne Road</p>
        <p>Columbus, OH 43206</p>
        <p>United States</p>
      </div>
      <div className={styles.contactSection}>
        <h2 className={styles.subHeading}>Get in Touch</h2>
        <p>Email: info@luxedetailing.com</p>
        <p>Phone: (585) 448-2996</p>
      </div>

      {/* Contact Form Section */}
      <div className={styles.formContainer}>
        <h2 className={styles.subHeading}>Request a Quote</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            What do you want done to your car?
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.formTextarea}
            />
          </label>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

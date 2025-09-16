"use client";

import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return & Exchange Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Terms Policy</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: support@yokart04.com</p>
          <p>Phone No.: +91 8******865</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomBar}>
        <p>2025 Yokart</p>
        <div className={styles.socials}>
          <a href="#"><FaFacebook /> Facebook</a>
          <a href="#"><FaInstagram /> Instagram</a>
          <a href="#"><FaTwitter /> Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

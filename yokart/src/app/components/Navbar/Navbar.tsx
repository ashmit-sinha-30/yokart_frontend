"use client";

import { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>THEYOKART</div>

      {/* Menu Links */}
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Cricket</li>
        <li>Football</li>

        {/* Men */}
        <li
          onMouseEnter={() => setActiveMenu("men")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Men
          {activeMenu === "men" && (
            <div className={styles.dropdown}>
              <div className={styles.column}>
                <p>Tshirt</p>
                <p>Tank Top</p>
                <p>Jacket & Hoodies</p>
                <p>Jogger</p>
                <p>Short</p>
              </div>
              <div className={styles.poster}>Poster</div>
            </div>
          )}
        </li>

        {/* Women */}
        <li
          onMouseEnter={() => setActiveMenu("women")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Women
          {activeMenu === "women" && (
            <div className={styles.dropdown}>
              <div className={styles.column}>
                <p>Tshirt</p>
                <p>Sport Bra</p>
                <p>Tank Top</p>
                <p>Jacket & Hoodies</p>
                <p>Short</p>
                <p>Legging</p>
              </div>
              <div className={styles.poster}>Poster</div>
            </div>
          )}
        </li>

        {/* Accessories */}
        <li
          onMouseEnter={() => setActiveMenu("accessories")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Accessories
          {activeMenu === "accessories" && (
            <div className={styles.dropdown}>
              <div className={styles.column}>
                <p>Bag</p>
                <p>Cap</p>
              </div>
              <div className={styles.poster}>Poster</div>
            </div>
          )}
        </li>
      </ul>

      {/* Icons */}
      <div className={styles.icons}>
        <FaSearch />
        <FaUser />
        <FaHeart />
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;

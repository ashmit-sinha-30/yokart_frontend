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
              <div className={styles.poster}>
                <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQYuBFRc7pU4yku75EV92FyBi3m9we5LPghHK1wn8tvKzemn1X-_tOSREIOf_uSJ-Jz7NwAuaTvMAJ4B5V90N8yBtS1F7CGOcq5eG-EfHTG9okYODTASg9Ugq6YY6PRFOOWu_mPfvffIXQVMtcjcWPonCGE4.jpg?r=4df" alt="Poster" />
              </div>
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
              <div className={styles.poster}>
                <img src="https://www.hollywoodreporter.com/wp-content/uploads/2025/08/American-Eagle.jpg?crop=0px%2C30px%2C1918px%2C1074px&resize=1440%2C810" alt="Poster" />
              </div>
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
              <div className={styles.poster}>
                <img src="https://wp.clutchpoints.com/wp-content/uploads/2025/09/Neymar-Jr.jpg?w=1200" alt="Poster" />
              </div>
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

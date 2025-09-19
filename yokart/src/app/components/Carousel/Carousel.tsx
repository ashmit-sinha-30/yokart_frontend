"use client";

import { useState } from "react";
import styles from "./Carousel.module.scss";
import jsonData from "../../data/carousel.json";

interface CarouselItem {
  name: string;
  image: string;
}

export default function Carousel() {
  const rawItems: CarouselItem[] = jsonData.items;
  const total = rawItems.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Pick 3 items starting from currentIndex
  const visibleItems = [
    rawItems[currentIndex],
    rawItems[(currentIndex + 1) % total],
    rawItems[(currentIndex + 2) % total],
  ];

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrow} onClick={handlePrev}>
        ❮
      </button>

      <div className={styles.carousel}>
        {visibleItems.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <img src={item.image} alt={item.name} />
            {/* <h3>{item.name}</h3> */}
            <div className={styles.overlay}> 
                <span className={styles.title}>{item.name}</span> 
                <button className={styles.more} aria-hidden>→</button> 
            </div>
          </div>
        ))}
      </div>

      <button className={styles.arrow} onClick={handleNext}>
        ❯
      </button>
    </div>
  );
}

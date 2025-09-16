"use client";

import React from "react";
import styles from "./CategorySection.module.scss";
import itemsData from "../../data/test.json";

interface Item {
  name: string;
  price: string;
  image: string;
}

interface Props {
  category: string;
}

const CategorySection: React.FC<Props> = ({ category }) => {
  const filteredItems: Item[] =
    (itemsData[category as keyof typeof itemsData] as Item[])?.slice(0, 4) || [];

  return (
    <div className={styles.section}>
      <h2 className={styles.header}>{category}</h2>
      <div className={styles.cardGrid}>
        {filteredItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

"use client";

import styles from "./Poster.module.scss";

interface PosterProps {
  imageUrl: string;
  alt?: string;
}

export default function Poster({ imageUrl, alt = "Poster" }: PosterProps) {
  return (
    <div className={styles.poster}>
      <img src={imageUrl} alt={alt} className={styles.image} />
    </div>
  );
}

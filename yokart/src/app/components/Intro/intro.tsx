// src/app/components/intro/intro.tsx
import Link from "next/link";
import styles from "./Intro.module.scss";

type Card = {
  title: string;
  href: string;
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

const cards: Card[] = [
  { title: "Cricket",   href: "/category/cricket",   src: "https://i.pinimg.com/736x/43/dc/38/43dc387def0fb306e7576ad04d3bdb49.jpg",   alt: "Cricket gear", size: "md" },
  { title: "Football",  href: "/category/football",  src: "https://i.pinimg.com/736x/43/dc/38/43dc387def0fb306e7576ad04d3bdb49.jpg",  alt: "Football boots", size: "md" },
  { title: "Tshirt",    href: "/category/tshirt",    src: "https://i.pinimg.com/736x/43/dc/38/43dc387def0fb306e7576ad04d3bdb49.jpg",    alt: "T-shirt", size: "md" },
  { title: "Accessories", href: "/category/accessories", src: "https://i.pinimg.com/736x/43/dc/38/43dc387def0fb306e7576ad04d3bdb49.jpg", alt: "Accessories bag", size: "md" },
  { title: "Short",     href: "/category/short",     src: "https://i.pinimg.com/736x/43/dc/38/43dc387def0fb306e7576ad04d3bdb49.jpg",     alt: "Shorts", size: "md" },
  { title: "Jogger",    href: "/category/jogger",    src: "https://i.pinimg.com/736x/43/dc/38/43dc387def0fb306e7576ad04d3bdb49.jpg",    alt: "Joggers", size: "md" },
];


const sizeClass = (s?: Card["size"]) =>
  s === "lg" ? styles.lg : s === "sm" ? styles.sm : styles.md;

export default function Intro() {
  return (
    <section className={styles.wrapper} aria-label="Shop by category">
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <Link
            key={c.title}
            href={c.href}
            className={`${styles.card} ${sizeClass(c.size)}`}
            data-index={i + 1}
          >
            <div className={styles.shape}>
              <img
                src={c.src}
                alt={c.alt}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className={styles.label}>{c.title}</span>
            <span aria-hidden className={styles.chevron}>➜</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
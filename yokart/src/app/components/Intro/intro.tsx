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
  { title: "Cricket",   href: "/category/cricket",   src: "https://plus.unsplash.com/premium_photo-1722086350831-3cc30b7d68a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   alt: "Cricket gear", size: "md" },
  { title: "Football",  href: "/category/football",  src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  alt: "Football boots", size: "md" },
  { title: "Tshirts",    href: "/category/tshirt",    src: "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    alt: "T-shirt", size: "md" },
  { title: "Accessories", href: "/category/accessories", src: "https://images.unsplash.com/photo-1747207318826-bb578e5705c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzJTIwYWNjZXNzb3JpZXMlMjBTSE9QJTIwU0VDVElPTnxlbnwwfHwwfHx8MA%3D%3D", alt: "Accessories bag", size: "md" },
  { title: "Shorts",     href: "/category/short",     src: "https://images.unsplash.com/photo-1719473442938-c605886ba1c3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     alt: "Shorts", size: "md" },
  { title: "Joggers",    href: "/category/jogger",    src: "https://images.unsplash.com/photo-1706550632130-333d8ec921ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",    alt: "Joggers", size: "md" },
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
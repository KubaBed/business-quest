"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* Kolejność rotacji: Zuzia → Asia → Marta (zdjęcia mają wbudowane tło brandu) */
const photos = [
  { src: "/images/hero/zuzia.webp", name: "Zuzia" },
  { src: "/images/hero/asia.webp", name: "Asia" },
  { src: "/images/hero/marta.webp", name: "Marta" },
];

const INTERVAL = 3800;

export default function RotatingPhotos({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % photos.length),
      INTERVAL
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={`${photo.name} — zespół businessQuest`}
          fill
          sizes="(max-width: 1024px) 90vw, 45vw"
          priority={i === 0}
          className="object-cover object-top transition-opacity duration-[1100ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

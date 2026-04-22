"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealSection({ children, className = "", delay = 0, threshold = 0.15 }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`reveal-section ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
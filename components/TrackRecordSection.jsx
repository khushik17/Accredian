"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: "professionals",
    end: 10000,
    suffix: "+",
    label: "Tailored Learning Paths Built For Every Professional Focus",
    format: "k",
  },
  {
    id: "sessions",
    end: 200,
    suffix: "+",
    label: "Custom-Fit Programs Designed For Measurable Progress",
    format: "plain",
  },
  {
    id: "learners",
    end: 5000,
    suffix: "+",
    label: "Focused Learners Advancing Through Specialized Segmentation",
    format: "k",
  },
];

function formatValue(value, type) {
  if (type === "k") {
    const inThousands = value / 1000;

    if (inThousands < 10) {
      return `${inThousands.toFixed(1)}K`;
    }

    return `${Math.round(inThousands)}K`;
  }

  return `${Math.round(value)}`;
}

export default function TrackRecordSection() {
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [values, setValues] = useState(
    stats.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    let frameId;

    const startAnimation = () => {
      const duration = 2000;
      const start = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setValues(
          stats.reduce((acc, item) => {
            acc[item.id] = Math.floor(item.end * easedProgress);
            return acc;
          }, {}),
        );

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="bg-slate-100 py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            <span className="text-blue-600">Tailored Course Segmentation</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {stats.map((item, index) => (
            <article
              key={item.id}
              className={`flex flex-col items-center px-4 text-center ${
                index !== stats.length - 1 ? "md:border-r md:border-slate-300" : ""
              }`}
            >
              <p className="rounded-full bg-blue-100 px-6 py-3 text-3xl font-black text-blue-600 md:px-8 md:text-4xl">
                {formatValue(values[item.id], item.format)}
                {item.suffix}
              </p>
              <p className="mt-4 max-w-xs text-lg font-medium leading-relaxed text-slate-900 md:mt-5 md:text-3xl">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

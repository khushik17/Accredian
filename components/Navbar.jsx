"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme-mode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const selectedTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", selectedTheme);

    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      const y = window.scrollY;

      setScrolled((prev) => {
        if (prev) {
          return y > 42;
        }

        return y > 92;
      });
    };

    const onScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.classList.add("theme-switching");
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme-mode", nextTheme);

    window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("theme-switching");
    });
  };

  return (
    <header className="fixed inset-x-0 top-3 z-100 flex justify-center px-2 md:px-4">
      <nav
        className={`navbar-shell mx-auto flex w-full origin-top items-center justify-between px-4 transition-[transform,max-width,padding,box-shadow,background-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:px-6 ${
          scrolled ? "max-w-4xl scale-[0.965] py-2 shadow-xl" : "max-w-7xl scale-100 py-3.5 shadow-lg"
        }`}
      >
        <a
          href="#home"
          className={`navbar-brand font-bold tracking-tight transition-all duration-300 ${
            scrolled ? "text-xl" : "text-3xl"
          }`}
          onClick={() => setOpen(false)}
        >
          accredian
        </a>

        <button
          aria-label="Toggle navigation menu"
          className="mobile-menu-button rounded-md border border-slate-300 bg-white/85 px-3 py-2 text-sm text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul className={`hidden items-center font-medium transition-all duration-300 md:flex ${scrolled ? "gap-2.5 text-[12px]" : "gap-6 text-sm"}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="nav-link transition-colors duration-300" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300"
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="theme-icon-sun h-4 w-4"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="theme-icon-moon hidden h-4 w-4"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" />
            </svg>
          </button>
          <a
            href="mailto:enterprise@accredian.com"
            aria-label="Mail"
            className="icon-button grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
          <a
            href="tel:+919999999999"
            aria-label="Call"
            className="icon-button grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8.1 9.6a16 16 0 0 0 6.3 6.3l1.15-1.2a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a
            href="#contact"
            className={`primary-nav-button ripple-button gradient-button whitespace-nowrap rounded-md text-sm font-semibold text-white transition-all duration-300 ${
              scrolled ? "ml-1 px-3.5 py-1.5 text-[12px]" : "ml-1 px-5 py-2"
            }`}
          >
            Enquire Now
          </a>
        </div>
      </nav>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close mobile menu overlay"
            className="mobile-menu-backdrop fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-[2px] md:hidden"
            onClick={() => setOpen(false)}
          />

          <div className="mobile-menu-panel fixed left-3 right-3 top-20 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl md:hidden">
            <ul className="space-y-3 text-sm font-medium text-slate-700">
              <li>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-4 py-2"
                >
                  Toggle Dark/Light Mode
                </button>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="gradient-button ripple-button inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-semibold text-white"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </header>
  );
}

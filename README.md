# 🚀 Accredian Enterprise Landing Page

A responsive and interactive enterprise landing page built using Next.js App Router, focusing on clean architecture, reusable components, and real-world UI interactions rather than static template replication.

---

## ✨ Features

* Responsive landing page structured with reusable sections
* Sticky navigation with smooth scrolling and theme switching
* Modular sections including hero, stats, partners, content blocks, FAQ, CTA, and footer
* Dynamic hero experience with animated counters for key metrics
* Adaptive data visualization using **pie layout on mobile** and **timeline layout on desktop**
* Skeleton loaders and refined loading states for improved perceived performance
* Floating chat widget with API-backed responses
* Lead capture form integrated with a Next.js API route
* Lead dashboard to review submitted enquiries
* Theme-aware styling with persistent dark/light mode
* Smooth anchored navigation across sections
* Mobile-first layout optimized for multiple screen sizes

---

## 🧩 Tech Stack

* Next.js 16 (App Router)
* React (Functional Components + Hooks)
* Tailwind CSS
* Next.js API Routes (backend integration)
* Groq API (chat functionality)
* Local JSON-based mock data (development)

---

## 📁 Project Structure

* `app/page.js` — Landing page entry point
* `app/layout.js` — Root layout, global font setup, and theme initialization
* `app/api/chat/route.js` — Chat API route
* `app/api/leads/route.js` — Lead capture API route
* `app/api/enterprise-data/route.js` — Partner data API route
* `components/` — Reusable UI sections and widgets
* `data/leads.json` — Local lead storage (development only)

---

## ⚙️ Setup

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env.local
```

3. Add your API key:

```env
GROQ_API_KEY=your_actual_groq_api_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open:

```
http://localhost:3000
```

---

## 🧠 Approach Taken

The application is structured around a **section-driven architecture**, allowing each part of the landing page to remain modular, readable, and reusable.

The focus was on building a **realistic product-like experience**, not just a static UI. Key considerations included:

* Maintaining clear separation between UI and data through API routes
* Using skeleton states to improve perceived loading performance
* Introducing dynamic elements (animated counters, responsive visualizations) to enhance engagement
* Ensuring theme consistency by initializing mode before first paint
* Keeping components small and composable for easier scaling

The overall approach prioritizes clarity, maintainability, and user experience over unnecessary complexity.

---

#🤖 AI Usage

AI tools were used selectively during development for higher-level guidance, such as understanding structure, improving content clarity, and exploring better approaches for aspects like SEO and overall user experience.

Basic implementation, UI logic, and core features were built and refined independently to ensure a clear understanding of the system and maintain full control over the codebase.

## 🚀 Improvements With More Time

* Replace local JSON storage with a persistent database
* Strengthen validation for form inputs and chat interactions
* Improve accessibility (ARIA roles, keyboard navigation)
* Add analytics for tracking user interactions and conversions
* Enhance chat with contextual memory and better UX feedback
* Introduce unit and integration testing
* Expand reusable sections for future scalability
* Add richer micro-interactions (toasts, transitions, feedback states)

---

## 🌐 Deployment

The project is ready for deployment on Vercel:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Configure environment variables:

```
GROQ_API_KEY
```

4. Deploy the application

---

## 🎯 Highlights

* Clean and scalable architecture
* Real-world features (chat system, lead capture, dashboard)
* Performance-focused UI with skeleton loading and dynamic rendering
* Adaptive UI patterns based on device type
* Designed with production-readiness in mind

# 🚀 Accredian Enterprise Landing Page

A modern, responsive enterprise landing page built using **Next.js App Router**, focused on clean architecture, reusable components, and real-world product-like interactions.

---

## ✨ Features

* 📱 Fully responsive landing page with reusable sections
* 🧭 Sticky navigation with smooth scrolling & theme toggle
* 🎯 Hero, stats, partners, content blocks, FAQ, CTA & footer
* 💬 Floating chat widget with API-backed responses
* 📝 Lead capture form integrated with backend (MongoDB)
* 📊 Lead dashboard to view submitted enquiries
* ⚡ Skeleton loaders & smooth loading states
* 🌙 Persistent dark/light mode support
* 🔗 Smooth anchored navigation between sections
* 📈 Animated counters for dynamic UI experience
* 📊 Adaptive visualization (mobile vs desktop layouts)
* 🧩 Modular and scalable component-based architecture

---

## 🧩 Tech Stack

* **Next.js 16 (App Router)**
* **React (Hooks + Functional Components)**
* **Tailwind CSS**
* **MongoDB (Mongoose)**
* **Next.js API Routes**
* **Groq API (Chat Integration)**

---

## 📁 Project Structure

```
app/
 ├── page.js                 # Landing page
 ├── layout.js               # Root layout
 ├── api/
 │    ├── chat/route.js      # Chat API
 │    ├── leads/route.js     # Lead API
 │    └── enterprise-data/   # Data API
components/                  # UI components
models/Lead.js               # DB schema
lib/mongodb.js               # DB connection
data/leads.json              # Local storage (dev only)
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

```bash
cp .env.example .env.local
```

### 3. Add environment variables

```env
GROQ_API_KEY=your_api_key
MONGODB_URI=your_mongodb_connection
```

### 4. Run the app

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 🧠 Approach

This project follows a **section-driven architecture** to keep the UI modular and maintainable.

### Key decisions:

* Separation of frontend & backend using API routes
* Focus on **real product experience**, not static UI
* Use of skeleton loaders for better perceived performance
* Dynamic elements like animations & responsive layouts
* Clean and scalable component structure

---

## 🤖 AI Usage

AI tools were used for:

* Improving structure and clarity
* Exploring better UX approaches
* SEO suggestions

Core implementation, logic, and UI were built independently.

---

## 🚀 Improvements With More Time

* 🔒 Stronger validation for forms
* ♿ Accessibility improvements (ARIA, keyboard nav)
* 📊 Analytics integration
* 🧠 Smarter chat with memory
* 🧪 Unit & integration testing
* 🎨 More reusable sections
* ✨ Micro-interactions (toasts, animations)

---

## 🌐 Deployment

Deployed easily using **Vercel**:

1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy 🚀

---

## 🎯 Highlights

* 🧱 Clean & scalable architecture
* 💼 Real-world features (chat + lead system + dashboard)
* ⚡ Performance-focused UI
* 📱 Fully responsive design
* 🚀 Production-ready mindset

---

## 🔗 Live Demo

👉 https://accredian-six.vercel.app

---

## 👩‍💻 Author

Built by **Khush**

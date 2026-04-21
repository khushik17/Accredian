# Accredian Enterprise Landing Page

A clean Next.js App Router recreation of Accredian's enterprise website, focused on structure, reusable components, and working interactions rather than template copying.

## Features

- Responsive landing page built with reusable sections
- Sticky navigation with smooth section links and theme switching
- Hero section, stats section, partner/client section, content blocks, FAQ, CTA, and footer
- Floating chat widget with API-backed responses
- Lead capture form that saves data through a Next.js API route
- Lead dashboard page to review stored enquiries
- Loading skeletons and polished loading states for better perceived performance
- Theme-aware styling with persistent dark/light mode
- Smooth scrolling and anchored navigation between sections
- Mobile-friendly layout that works across screen sizes
- Modular architecture designed for easier maintenance and reuse

## Tech Stack

- Next.js 16 with App Router
- React functional components and hooks
- Tailwind CSS
- Local JSON-based mock data for leads and partner content
- Groq-backed chat API route

## Project Structure

- `app/page.js`: Landing page entry point
- `app/layout.js`: Root layout, global font setup, and theme bootstrapping
- `app/api/chat/route.js`: Chat API route
- `app/api/leads/route.js`: Lead capture API route
- `app/api/enterprise-data/route.js`: Partner data API route
- `components/`: Reusable page sections and widgets
- `data/leads.json`: Local lead storage used during development

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local env file:

```powershell
Copy-Item .env.example .env.local
```

3. Add your API key to `.env.local`:

```env
GROQ_API_KEY=your_actual_groq_api_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

## Approach Taken

The page is built as a set of focused sections so each part is easy to read, update, and reuse. The layout uses a simple data flow: the landing page composes the sections, API routes provide dynamic data, and the chat widget communicates with the backend without mixing logic into the page shell.

The implementation favors clarity over over-engineering. Shared UI patterns are kept small and explicit, and the styling is handled with consistent Tailwind classes plus a few targeted custom rules where needed.

The theme is initialized before paint so the app does not flash the wrong mode during refresh. Skeleton and loading states are used where data is fetched so the interface feels stable while requests are in progress.

## AI Usage

AI assistance was used to help with:

- Structuring the Next.js component tree
- Cleaning up section copy and layout flow
- Refactoring repeated UI patterns
- Generating and polishing README documentation
- Tightening wording for internship-style submission clarity

All final changes were reviewed and adjusted manually to keep the codebase consistent and maintainable.

## Improvements With More Time

- Add stronger form validation for leads and chat inputs
- Replace the mock partner data with a real CMS or database source
- Add more content-rich reusable sections for easier future expansion
- Improve analytics and success-state feedback for submissions
- Add unit or integration tests for API routes and key components
- Move lead storage from local JSON to a persistent database for production
- Add richer skeleton screens for more sections
- Add toast notifications and accessibility refinements

## Deployment

The project is ready to deploy on Vercel.

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Set `GROQ_API_KEY` in the Vercel environment variables.
4. Deploy the Next.js app.

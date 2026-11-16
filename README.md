# Sachin Prasad — Portfolio

A minimal, Apple-inspired personal portfolio built with **React 19, Vite, Tailwind CSS v4 and Lucide icons**. No backend, no paid services, static output.

## Folder structure

```
.
├── index.html                 # Entry HTML (applies saved theme before first paint)
├── netlify.toml               # Netlify build config
├── package.json
├── vite.config.js
├── public/
│   ├── profile.png            # Profile photo  ← replace to change
│   └── Sachin_Prasad_Resume.pdf   # Resume download  ← replace to update
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # Design tokens (light + dark), animations
    ├── data/portfolio.js      # ALL site content lives here
    ├── hooks/                 # useTheme, useReveal, useActiveSection
    └── components/            # Navbar, Hero, About, Skills, Projects, ...
```

## Local setup

Requires Node.js 18+ (20 or 22 recommended).

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Updating content

Everything is edited in **`src/data/portfolio.js`**:

| What | Where |
| --- | --- |
| IEEE paper link | `achievements.ieee.url` (empty = shows "Publication link coming soon") |
| Profile photo | Replace `public/profile.png` (or change `profile.photo`) |
| Resume | Replace `public/Sachin_Prasad_Resume.pdf` (or change `profile.resume`) |
| LeetCode numbers | `leetcode` |
| Projects, skills, links | `projects`, `skillGroups`, `profile.links` |

Add a live demo to a project later by adding a `demo` field and rendering it in `ProjectCard.jsx`. None are shown now because no deployment URLs exist.

## Deploy

### Vercel
1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.

Or with the CLI: `npx vercel` then `npx vercel --prod`.

### Netlify
1. Push to GitHub, then **Add new site → Import an existing project** on [netlify.com](https://netlify.com).
2. Build settings are read from `netlify.toml` (`npm run build`, publish `dist`). Click **Deploy**.

Or drag-and-drop the `dist/` folder after `npm run build` at [app.netlify.com/drop](https://app.netlify.com/drop).

## Theme

The site is white by default. The toggle in the navbar switches to a dark theme and remembers the choice in `localStorage`; it never follows the OS setting automatically, so first-time visitors always see the white design.

## Accessibility

Semantic landmarks, a skip link, visible focus rings, `aria-expanded` on expandable cards, labelled external links, and `prefers-reduced-motion` support.

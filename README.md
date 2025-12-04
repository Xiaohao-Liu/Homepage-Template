# Academic Homepage Template

An academic homepage template built with **Vite + React + NextUI v2 + Tailwind CSS**.  
It comes with ready‑made sections (publications, news, education, honors, etc.), dark mode, animations, and a fully responsive layout, so you can quickly set up a personal or group website.

**Live Demo**: [xiaohao-liu.github.io](https://xiaohao-liu.github.io/)

## ✨ Features

- **Modern stack**: Vite, React, TypeScript, NextUI, Tailwind CSS
- **Academic oriented**: pre‑built modules for publications, news, education, honors
- **Data‑driven**: update content via files in `src/data`
- **Dark / light themes** with smooth animations and mobile‑friendly layout
- **pnpm‑first workflow** (but can be used with npm/yarn/bun as well)

## 🚀 Getting Started

```bash
git clone <your-repo-url> homepage-template
cd homepage-template
pnpm install
pnpm dev
```

By default, the dev server runs at `http://localhost:5173`.

## 🔧 Scripts

| Command         | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start the development server |
| `pnpm build`   | Build for production     |
| `pnpm preview` | Preview the production build |

## 🗂️ Project Structure

```text
src/
├─ assets/      # Images, icons and other static assets
├─ components/  # Reusable UI components
├─ config/      # Site-level config (e.g. social links)
├─ data/        # Academic data (papers, education, honors, news, etc.)
├─ pages/       # Page entries
└─ styles/      # Global styles
```

> To customize most of the homepage content, you mainly edit `src/data` and `src/config/site.ts`.

## 🧩 Customization Guide

- **Profile / bio**: edit `src/data/profile.tsx`
- **Selected publications**: edit `src/data/paper_selected.tsx`
- **All publications**: edit `src/data/all_paper.tsx`
- **News / honors / education**: edit `src/data/news.tsx`, `src/data/honor.tsx`, `src/data/education.tsx`
- **Site meta & navigation**: tweak `src/config/site.ts` and `src/components/navbar.tsx`

## 📦 Deployment

This is a static site and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.):

```bash
pnpm build
```

The production assets are generated in the `dist/` directory.

## 📄 License

This template is open‑sourced under the [MIT License](./LICENSE). You are welcome to use and modify it for your own homepage.

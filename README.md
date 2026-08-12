# Academic Portfolio — Haodong Zhang (张浩东)

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CDN-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A minimalist, academic-style personal site — single-page, tab-navigated, with a
sidebar profile, project/education/honors sections, downloadable CN/EN resumes,
and a small Gemini-backed research assistant.

**Live**: <https://holEeast979.github.io>

<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Project banner" width="100%">
</div>

## Features

- **Academic aesthetic** — serif headings (Merriweather), neutral `academic-*`
  palette, classic link blue. Configured inline in `index.html`.
- **Tab-based single page** — About / Projects / CV, no router, state in `App.tsx`.
- **Resume downloads** — Chinese and English PDFs served from `public/`.
- **Research assistant** — `gemini-2.5-flash` via `@google/genai`, prompted to
  answer in a terse technical-note style (`services/gemini.ts`).
- **Content as data** — bio, projects, education, honors, and tech stack all live
  in `constants.ts`; typed by `types.ts`. Editing the site means editing one file.

## Tech Stack

| Layer | Choice |
| --- | --- |
| UI | React 19 + TypeScript 5.8 |
| Build | Vite 6 |
| Styling | Tailwind CSS via CDN (`index.html`), config inlined |
| AI | `@google/genai` — `gemini-2.5-flash` |
| Hosting | GitHub Pages (`gh-pages` branch) |

## Quick Start

Requires Node.js (LTS) and a [Gemini API key](https://aistudio.google.com/app/apikey).

```bash
git clone https://github.com/holEeast979/holEeast979.github.io.git academic-portfolio
cd academic-portfolio
npm install
```

Create `.env.local` in the project root:

```env
GEMINI_API_KEY=your_key_here
```

The name has no `VITE_` prefix on purpose — `vite.config.ts` reads it with
`loadEnv` and injects it as `process.env.API_KEY`, which `services/gemini.ts` reads.

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build to dist/
npm run preview  # serve the built output
```

> **Note on the API key.** Vite's `define` substitutes the key into the client
> bundle at build time, so anyone can read it from the deployed site. Use a
> restricted key, or drop the assistant, before treating this as production.

## Project Structure

```
├── App.tsx                 # tab state + section rendering
├── constants.ts            # ← all site content (profile, projects, CV)
├── types.ts                # content interfaces
├── index.html              # Tailwind CDN + theme + fonts
├── components/
│   ├── Sidebar.tsx         # avatar, contacts, nav, resume menu
│   ├── ContentSection.tsx  # section shell
│   ├── ResearchAssistant.tsx
│   └── Icons.tsx           # inline SVGs
├── services/gemini.ts      # Gemini client
└── public/                 # avatar, favicon, OG image, resume PDFs
```

## Customizing

Most edits are one file: `constants.ts`. `PROFILE` holds the name, title,
affiliation, bio, and social links (`github` / `linkedin` / `x` — omit a field to
hide its row). `PROJECTS`, `EDUCATION`, `HONORS`, `TECHNICAL_FOCUS`, and
`TECH_STACK` are plain arrays rendered in order. Swap `public/avatar.jpg`,
`public/og-image.jpg`, and the two resume PDFs to replace the assets. Colors and
fonts are in the `tailwind.config` block in `index.html`.

## Deployment

```bash
npm run deploy   # vite build && gh-pages -d dist
```

Publishes `dist/` to the `gh-pages` branch. `homepage` in `package.json` must
match the Pages URL.

## License

MIT.

---
Built by [Haodong Zhang](https://github.com/holEeast979) ·
[haodong.zhang.hk@gmail.com](mailto:haodong.zhang.hk@gmail.com)

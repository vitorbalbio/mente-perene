# mente-perene

A static website built with [Astro](https://astro.build/) using the [Brook 2](https://github.com/holger1411/astro-brook) theme.

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer
- npm (bundled with Node.js)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the local development server (port 4321).  |
| `npm run build`   | Build the production site into `dist/`.          |
| `npm run preview` | Preview the production build locally.            |

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── assets/           # Optimized assets (images, etc.)
│   ├── components/       # Reusable components
│   ├── content/posts/    # Blog posts (Markdown/MDX)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes
│   ├── styles/           # Stylesheets
│   └── utils/            # Helper functions
└── astro.config.mjs      # Astro configuration
```

## Deployment

`npm run build` outputs a fully static site to `dist/`, which can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

---

Built with Astro, TypeScript, and Tailwind CSS. Based on the [Brook 2](https://github.com/holger1411/astro-brook) theme.

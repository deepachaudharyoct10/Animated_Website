# MUREC — Redesigned Home Page

A ground-up redesign of the [MUREC](https://www.murec.com/) real-estate homepage, built with the original site's content and a fresh, animation-forward UI inspired by the visual language of [Timeless](https://timeless.club/en) (warm cream/ink palette, generous whitespace, editorial typography, restrained luxury motion).

Built with **React + Vite** and **CSS Modules** (no CSS frameworks), with [Framer Motion](https://www.framer.com/motion/) for interaction/scroll animation.

## Stack

- React 19 + Vite
- CSS Modules per component, global design tokens in `src/index.css`
- Framer Motion for animation
- `@fontsource/fraunces` (display serif) + `@fontsource/manrope` (body sans), self-hosted — no runtime font requests

## Project structure

```
src/
├── App.jsx / App.module.css
├── index.css              # design tokens (colors, type scale, spacing) + global reset
├── data/                  # centralized site content sourced from murec.com
├── assets/images/         # media sourced from murec.com
├── hooks/                 # shared hooks (lazy video loading, etc.)
└── components/            # one folder per component: Component.jsx + Component.module.css
```

## Getting started

```bash
npm install
npm run dev
```

## Notes

- Background videos are streamed directly from `murec.com`'s existing media and lazy-loaded on scroll into view, rather than bundled into the repo, to keep the initial payload light.
- This is a design exercise: all real-estate content, copy, and photography belong to MUREC.

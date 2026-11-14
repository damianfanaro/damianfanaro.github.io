# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Plain HTML + CSS + JS. No build step, no dependencies, no package manager. Deployed via GitHub Pages to `damianfanaro.me` (CNAME).

## Running locally

Any static file server works:

```bash
npx serve .
# or
python3 -m http.server
```

## Architecture

Single-page layout with three files:

- `index.html` — structure and content (bio text, social links with inline SVG icons)
- `styles.css` — all styling; uses CSS custom properties, `clamp()` for fluid sizing, and CSS animations (`rise` keyframe, disabled under `prefers-reduced-motion`)
- `script.js` — two runtime values only: copyright year and years-of-experience calculated from a hardcoded career start date (May 2012). `index.html` holds static fallback values for both so the page reads correctly without JS

`favicon.svg` is an SVG with DF initials. `avatar.jpg` is the profile photo. The `archive/` folder holds unused legacy images and is not deployed.

The deploy workflow (`.github/workflows/deploy.yaml`) copies only the public site files into `_site/` — add any new public file to that copy step.

## Design constraints

- Fonts: Cormorant (headings) + IBM Plex Mono (body, UI)
- Color palette is fixed via CSS variables in `:root` — midnight navy background `#060d1a`, foreground `#dde8f5`, muted `#6b8cc4`, blue accent `#5b9eff`
- Text must keep WCAG AA contrast (≥ 4.5:1) against the background
- Site is English-only; no i18n
- No contact form, no blog, no menu — only an icon row of social links; intentionally minimal

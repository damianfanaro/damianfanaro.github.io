# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Plain HTML + CSS + JS. No build step, no dependencies, no package manager. Deployed via GitHub Pages to `damianfanaro.com` (CNAME).

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
- `styles.css` — all styling; uses CSS custom properties, `clamp()` for fluid sizing, and CSS animations (`rise` keyframe)
- `script.js` — two runtime values only: copyright year and years-of-experience calculated from a hardcoded career start date (May 2012)

`favicon.svg` is an SVG with DF initials. `avatar.jpg` is the profile photo. The `archive/` folder holds unused legacy images.

## Design constraints

- Fonts: Cormorant (headings, platform names) + IBM Plex Mono (body, UI)
- Color palette is fixed via CSS variables in `:root` — dark background `#0b0b0f`, warm foreground `#ede8e0`, gold accent `#c9a96e`
- Site is English-only; no i18n
- No contact form, no blog, no nav — intentionally minimal

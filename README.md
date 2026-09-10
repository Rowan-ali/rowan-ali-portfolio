# Rowan Ali — Portfolio Website

A responsive personal portfolio built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — website structure and content
- `styles.css` — complete visual system, responsive layouts, light/dark themes
- `script.js` — theme persistence, mobile navigation, scroll reveal, project filters, case-study modal
- `CV.pdf` — downloadable CV

## Features
- Responsive desktop / tablet / mobile design
- Responsive typography using `clamp()`
- Light and dark modes
- Uses system theme on first visit and stores user preference in `localStorage`
- Sticky navigation + mobile menu
- Smooth scrolling and active section highlighting
- Scroll-reveal animations with reduced-motion accessibility support
- Project filtering
- Accessible project case-study modal
- Keyboard-friendly navigation
- SEO and Open Graph metadata
- Feminine pink / lavender / plum visual identity

## Run locally
Open `index.html` in a browser.

For the most reliable local preview, use VS Code Live Server or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Before publishing
1. Add your preferred professional photo if you want one.
2. Add GitHub links for projects that do not yet have public repository links.
3. Add verified testimonials only when you have real client/supervisor feedback.
4. Deploy with GitHub Pages, Netlify, Vercel, or another static host.


## V3 updates
- Original portrait is preserved without destructive circular cropping.
- Stronger professional About section.
- Recent IMDb NLP project added with verified final metrics.
- Natural Scene Classification computer vision project added with verified final metrics.
- Computer Vision project filter added.
- Contact phone number added.
- Testimonials remain intentionally hidden until verified feedback is available.

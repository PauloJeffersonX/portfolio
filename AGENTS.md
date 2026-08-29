# AGENTS.md

## Project overview

This repository is a personal portfolio for Paulo Jefferson, published as a static site on GitHub Pages. The site is built with plain HTML, CSS, and JavaScript; there is no bundler, app server, or package manager setup in the repository.

Primary files:
- [index.html](index.html) — page structure, metadata, sections, and content
- [styles.css](styles.css) — design system, layout, animations, and responsiveness
- [script.js](script.js) — scroll reveal, counters, mobile menu, and active-nav behavior
- [assets/](assets/) — images, branding, and downloadable CV

## AEGIS-specific context

AEGIS is the portfolio’s personal AI/lab identity. When making changes related to the AEGIS section, keep the tone consistent with a local AI workstation / Fedora + Hermes / Ollama concept, but do not introduce heavy framework logic or external app dependencies. Prefer simple, static enhancements that match the visual language of the current site.

## Working conventions

- Keep edits small and targeted.
- Preserve the Brazilian Portuguese copy unless the user asks for a language change.
- Do not add a build pipeline unless explicitly requested.
- Prefer semantic HTML and lightweight JS for interactions.
- Maintain the existing anchor navigation ids used by the header links, especially for `#sobre`, `#experiencia`, `#cases`, `#aegis`, `#formacao`, and `#contato`.
- Keep the site accessible: preserve `aria-label`s, alt text, semantic headings, and contrast.
- Treat the GitHub Pages deployment as root-based hosting from the `main` branch.

## Typical tasks

### Editing content

- Update the copy in [index.html](index.html) first.
- Keep the visual hierarchy and section order consistent.
- Reuse the existing classes and styling patterns rather than creating a separate style convention.

### Editing styles

- Update [styles.css](styles.css) for spacing, typography, cards, responsive behavior, and visual polish.
- Keep animations subtle and consistent with the existing design language.
- Validate that mobile navigation and layout still work on smaller screens.

### Editing behavior

- Use [script.js](script.js) for lightweight DOM behaviors only.
- Preserve current scroll observers, active link highlighting, and the mobile menu toggle.
- If adding new interactions, keep them dependency-free and resilient when elements are missing.

## Before finishing a task

- Check that the page still loads without broken asset paths.
- Verify that links still point to valid sections and files.
- Avoid introducing Node or package configuration not already present in the repository.
- If the request is about the AEGIS project or AI-lab branding, keep the details aligned with the existing portfolio narrative.

## Helpful references

- [README.md](README.md) — project summary and GitHub Pages setup details
- [robots.txt](robots.txt) and [sitemap.xml](sitemap.xml) — SEO metadata baseline

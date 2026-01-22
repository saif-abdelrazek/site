---
title: HC Starlight
description: An Astro + Starlight theme styled with Hack Club branding—a documentation/theme starter and the first npm package I published while learning Starlight theming.
technologies:
  - name: Astro
    icon: logos:astro-icon
    category: frontend
    slug: astro
  - name: Starlight
    category: framework
    slug: starlight
  - name: Hack Club CSS
    icon: simple-icons:hackclub
    category: design
    slug: hackclub-css
link: https://hc-starlight.pages.dev
repo: https://github.com/saif-abdelrazek/hc-starlight
package: https://www.npmjs.com/package/hc-starlight
slug: hc-starlight
order: 7
shownInHome: true
---

## About This Project

HC Starlight started as an experiment to theme Starlight with Hack Club branding and to learn how Starlight themes override components and styles. It grew into a published npm package (v0.0.8) and a documentation site that demonstrates the theme in a real project.

## What I set out to solve

- Understand how Starlight components and CSS are structured and overridden
- Integrate Hack Club colors and branding consistently across the theme
- Provide a polished docs/demo so others can preview the theme

## Key Decisions & Work

- Replaced default color tokens with Hack Club CSS variables (https://css.hackclub.com) so the theme matches brand colors.
- Swapped the default theme toggle for the `astro-theme-toggle` package to get the exact behavior I wanted.
- Designed a custom "Houston" mascot logo inspired by Hack Club’s playful style and integrated the Hack Club mark.
- Added optional client-side routing (via `astro-vtbot`) so the docs can behave like an SPA when desired—kept it optional per project needs.

## Icon Work & Challenges

I ran into inconsistent icon sizing in `@hackclub/icons`. To fix this I:
- Selected 36 icons from the pack, normalized their SVG paths and margins, and bundled a normalized set.
- Created an `Icon` component to simplify usage and ensure consistent sizing across UI elements.

This manual SVG work taught me a lot about SVG path manipulation and optimized icon delivery for themes.

## Learnings

- Deep dive into Starlight theme internals and how component overrides work.
- How to map a third-party design system (Hack Club CSS) into Starlight's tokens and variables.
- Packaging and publishing an npm package for the first time.
- Practical SVG normalization workflows and creating a small icon subsystem.

This project demonstrates my ability to reverse-engineer a theme, adapt branding at the token level, and ship a small design system and theme package for others to use.
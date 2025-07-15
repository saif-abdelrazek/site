// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import collection_search from "astro-collection-search";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/projects": "/#projects",
    "/technologies": "/#technologies",
    "/about": "/#about",
    "/post": "/blog",
    "/posts": "/blog",
  },
  site: "https://saifabdelrazek.com",
  experimental: {
    contentIntellisense: true,
    liveContentCollections: true,
  },

  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),

    collection_search({
      collections: ["posts"],
      fields: ["title", "description", "content"],
    }),
  ],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  adapter: vercel({
    imageService: true,
  }),
});

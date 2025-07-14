// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import collection_search from "astro-collection-search";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
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
  adapter: netlify({
    edgeMiddleware: true,
  }),
});

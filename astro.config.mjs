// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import collection_search from "astro-collection-search";

import vercel from "@astrojs/vercel";

import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  output: "static",
  redirects: {
    "/projects": "/#projects",
    "/technologies": "/#technologies",
    "/about": "/#about",
    "/post": "/blog",
    "/posts": "/blog",
    "/blog/author": "/blog/author/saif-abdelrazek",
    "/edu": "/education",
    '/github': 'https://github.com/saif-abdelrazek',
    '/linkedin': 'https://linkedin.com/in/saifabdelrazek',
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
    AstroPWA({
      base: "/",
      scope: "/",
      includeAssets: [
        "favicon-96x96.png",
        "favicon.svg",
        "favicon.ico",
        "apple-touch-icon.png",
      ],
      srcDir: "src",
      filename: "sw.js",
      registerType: "autoUpdate",
      manifest: {
        name: "Saif Abdelrazek Personal Website",
        short_name: "SaifSite",
        description:
          "Personal website of Saif Abdelrazek || Not just a website",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#f8fafc",
        theme_color: "#186faf",
        lang: "en",
        icons: [
          {
            src: "/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            src: "/favicon.ico",
            sizes: "48x48 32x32 16x16",
            type: "image/x-icon",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
        maximumFileSizeToCacheInBytes: 10000000,
      },
      devOptions: {
        enabled: true,
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  adapter: vercel(),
});

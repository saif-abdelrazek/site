// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import collection_search from "astro-collection-search";

import vercel from "@astrojs/vercel";

import AstroPWA from "@vite-pwa/astro";
import { manifest } from "astro:ssr-manifest";

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
      manifest: {
        name: "Saif Abdelrazek Personal Website",
        short_name: "SaifSite",
        description: "Portfolio, blog, and projects by Saif Abdelrazek.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#f8fafc",
        theme_color: "#186faf",
        lang: "en",
        icons: [
          {
            src: "/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/favicon.ico",
            sizes: "48x48 32x32 16x16",
            type: "image/x-icon",
          },
        ],
        shortcuts: [
          {
            name: "Blog",
            short_name: "Blog",
            description: "Read my latest posts",
            url: "/blog",
            icons: [
              { src: "/icons/blog.png", sizes: "96x96", type: "image/png" },
            ],
          },
          {
            name: "Projects",
            short_name: "Projects",
            description: "View my projects",
            url: "/projects",
            icons: [
              { src: "/icons/projects.png", sizes: "96x96", type: "image/png" },
            ],
          },
          {
            name: "Portfolio",
            short_name: "Portfolio",
            description: "See my portfolio",
            url: "/portfolio",
            icons: [
              {
                src: "/icons/portfolio.png",
                sizes: "96x96",
                type: "image/png",
              },
            ],
          },
        ],
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  adapter: vercel(),
});

// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import collection_search from "astro-collection-search";

import vercel from "@astrojs/vercel";

import AstroPWA from "@vite-pwa/astro";

import { SITE_CONFIG, SITE_URLS, SOCIAL_LINKS, PWA_CONFIG } from "./src/lib/constants";

// https://astro.build/config
export default defineConfig({
  output: "static",
  
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  redirects: {
    "/projects": "/#projects",
    "/technologies": "/#technologies",
    "/about": "/#about",
    "/post": "/blog",
    "/posts": "/blog",
    "/blog/author": "/blog/author/saif-abdelrazek",
    "/edu": "/education",
    '/github': SOCIAL_LINKS.github,
    '/linkedin': SOCIAL_LINKS.linkedin,
  },
  site: SITE_CONFIG.siteUrl,
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
        PWA_CONFIG.icons.favicon96.replace('/', ''),
        PWA_CONFIG.icons.faviconSvg.replace('/', ''),
        PWA_CONFIG.icons.faviconIco.replace('/', ''),
        PWA_CONFIG.icons.appleTouchIcon.replace('/', ''),
      ],
      srcDir: "src",
      filename: "sw.js",
      registerType: "autoUpdate",
      manifest: {
        name: SITE_CONFIG.title,
        short_name: SITE_CONFIG.shortName,
        description: SITE_CONFIG.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: PWA_CONFIG.backgroundColor,
        theme_color: PWA_CONFIG.themeColor,
        lang: SITE_CONFIG.defaultLanguage,
        icons: PWA_CONFIG.manifestIcons as any,
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

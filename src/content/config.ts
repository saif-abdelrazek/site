import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const postsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
    generateId: ({ entry, data }) => {
      // Extract language prefix from entry path
      const pathParts = entry.split("/");
      const langPrefix = pathParts.length > 1 ? pathParts[0] + "/" : "";
      
      // Generate a slug from the entry path, removing the file extension
      if (data?.slug && typeof data.slug === "string") {
        return langPrefix + data.slug;
      }
      const slug = entry.replace(/\.mdx?$/, "");
      return slug.startsWith("/") ? slug.slice(1) : slug; // Ensure the slug starts without a leading slash
    },
  }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        category: z.string().optional(),
        description: z.string().optional(),
        author: z.string().default("Saif Abdelrazek"),
        date: z.date(),
        lastUpdated: z.date().optional(),
        image: image(),
        tags: z.array(z.string()).optional(),
        slug: z.string().optional(),
        draft: z.boolean().default(false),
        lang: z.enum(["en", "ar"]).optional(),
        pinned: z.boolean().default(false),
        pinnedOrder: z.number().optional(),
        series: z.string().optional(),
      })
      .merge(rssSchema),
});

const projectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
    generateId: ({ entry, data }) => {
      // Extract language prefix from entry path
      const pathParts = entry.split("/");
      const langPrefix = pathParts.length > 1 ? pathParts[0] + "/" : "";
      
      // Generate a slug from the entry path, removing the file extension
      if (data?.slug && typeof data.slug === "string") {
        return langPrefix + data.slug;
      }
      const slug = entry.replace(/\.mdx?$/, "");
      return slug.startsWith("/") ? slug.slice(1) : slug; // Ensure the slug starts without a leading slash
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      image: image().optional(),
      technologies: z
        .array(
          z.object({
            name: z.string(),
            icon: z.string().optional(),
            level: z.string().optional(),
            category: z.string(),
            slug: z.string(),
          }),
        )
        .optional(),
      link: z.string().optional(),
      date: z.date().optional(),
      repo: z.string().optional(),
      tags: z.array(z.string()).optional(),
      slug: z.string().optional(),
      shownInHome: z.boolean().default(false),
      lang: z.enum(["en", "ar"]).optional(),
    }),
});

// Education Section enum for type safety
const educationSectionEnum = z.enum(["formal", "self-learning"]);

// Institution Collection - Schools, platforms, learning resources
const institutionsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/institutions",
    generateId: ({ entry, data }) => {
      const pathParts = entry.split("/");
      const langPrefix = pathParts.length > 1 ? pathParts[0] + "/" : "";
      if (data?.slug && typeof data.slug === "string") {
        return langPrefix + data.slug;
      }
      const slug = entry.replace(/\.mdx?$/, "");
      return slug.startsWith("/") ? slug.slice(1) : slug;
    },
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      shortName: z.string().optional(),
      slug: z.string(),
      period: z.string(),
      role: z.string().default("Student"),
      description: z.string(),
      logo: image().optional(),
      url: z.string().optional(),
      location: z.string().optional(),
      section: educationSectionEnum,
      order: z.number().default(0),
      current: z.boolean().default(false),
      lang: z.enum(["en", "ar"]).optional(),
    }),
});

// Moments Collection - Key learning events, achievements, milestones
const momentsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/moments",
    generateId: ({ entry, data }) => {
      const pathParts = entry.split("/");
      const langPrefix = pathParts.length > 1 ? pathParts[0] + "/" : "";
      if (data?.slug && typeof data.slug === "string") {
        return langPrefix + data.slug;
      }
      const slug = entry.replace(/\.mdx?$/, "");
      return slug.startsWith("/") ? slug.slice(1) : slug;
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      date: z.date(),
      excerpt: z.string(),
      institutionSlug: z.string(),
      section: educationSectionEnum,
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      lang: z.enum(["en", "ar"]).optional(),
    }),
});

// const experienceCollection = defineCollection({
//   loader: glob({
//     pattern: "*.{md,mdx}",
//     base: "@content//experience",
//     generateId: ({ entry, data }) => {
//       // Generate a slug from the entry path, removing the file extension
//       if (data?.slug && typeof data.slug === "string") {
//         return data.slug;
//       }
//       const slug = entry.replace(/\.mdx?$/, "");
//       return slug.startsWith("/") ? slug.slice(1) : slug; // Ensure the slug starts without a leading slash
//     },
//   }),
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string().optional(),
//       image: image().optional(),
//       startDate: z.date(),
//       endDate: z.date().optional(),
//       company: z.string().optional(),
//       position: z.string().optional(),
//       link: z.string().optional(),
//       tags: z.array(z.string()).optional(),
//     }),
// });

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  institutions: institutionsCollection,
  moments: momentsCollection,
  // experience: experienceCollection,
};

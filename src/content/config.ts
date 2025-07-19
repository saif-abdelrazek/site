import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const postsCollection = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: "./src/content/posts",
    generateId: ({ entry, data }) => {
      // Generate a slug from the entry path, removing the file extension
      if (data?.slug && typeof data.slug === "string") {
        return data.slug;
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
        image: image(),
        tags: z.array(z.string()).optional(),
        slug: z.string().optional(),
        draft: z.boolean().default(false),
      })
      .merge(rssSchema),
});

const portfolioCollection = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: "./src/content/portfolio",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      image: image().optional(),
      technologies: z
        .array(
          z.object({
            name: z.string(),
            icon: z.string().optional(),
            level: z.string().optional(),
            category: z.string(),
            favorite: z.boolean().default(false),
            description: z.string().optional(),
            slug: z.string(),
            link: z.string().optional(),
          }),
        )
        .optional(),
      link: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const projectsCollection = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: "./src/content/projects",
    generateId: ({ entry, data }) => {
      // Generate a slug from the entry path, removing the file extension
      if (data?.slug && typeof data.slug === "string") {
        return data.slug;
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
    }),
});

const educationCollection = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: "./src/content/education",
    generateId: ({ entry, data }) => {
      // Generate a slug from the entry path, removing the file extension
      if (data?.slug && typeof data.slug === "string") {
        return data.slug;
      }
      const slug = entry.replace(/\.mdx?$/, "");
      return slug.startsWith("/") ? slug.slice(1) : slug; // Ensure the slug starts without a leading slash
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      institution: z.string().optional(),
      location: z.string().optional(),
      image: image().optional(),
      startDate: z.date().optional(),
      current: z.boolean().optional().default(false),
      endDate: z.date().optional(),
      type: z.enum(["Formal Education", "Self Learning", "Others"]),
      link: z.string().optional(),
      tags: z.array(z.string()).optional(),
      degree: z.string().optional(),
    }),
});

// const experienceCollection = defineCollection({
//   loader: glob({
//     pattern: "*.{md,mdx}",
//     base: "./src/content/experience",
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
  portfolio: portfolioCollection,
  projects: projectsCollection,
  education: educationCollection,
  // experience: experienceCollection,
};

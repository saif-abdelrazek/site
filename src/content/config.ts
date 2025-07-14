import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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
    z.object({
      title: z.string(),
      category: z.string().optional(),
      description: z.string().optional(),
      author: z.string().default("Saif Abdelrazek"),
      date: z.date(),
      image: image().optional(),
      tags: z.array(image()).optional(),
      slug: z.string().optional(),
    }),
});

const portfolioCollection = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: "./src/content/portfolio",
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

export const collections = {
  posts: postsCollection,
  portfolio: portfolioCollection,
};

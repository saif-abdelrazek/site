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
  schema: () =>
    z.object({
      title: z.string(),
      category: z.string().optional(),
      description: z.string().optional(),
      author: z.string().default("Saif Abdelrazek"),
      date: z.date(),
      image: z
        .object({
          src: z.string().optional(),
          alt: z.string().optional(),
        })
        .optional(),
      tags: z.array(z.string()).optional(),
      slug: z.string().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};

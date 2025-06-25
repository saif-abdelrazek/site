import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};

// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  })
});

const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  })
});

const games = defineCollection({
    schema: z.object({
      title: z.string(),
      tagline: z.string(),
      status: z.enum(['concept', 'in-dev', 'demo', 'released']),
      date: z.string(), // or z.date() if you’re parsing it
      description: z.string(),
      thumbnail: z.string().optional(),
      features: z.array(z.string()).optional(),
  
      // 🔽 Add these
      developer: z.string().optional(),
      publisher: z.string().optional(),
      releaseDate: z.string().optional(),
      tags: z.array(z.string()).optional(),
      media: z.object({
        trailer: z.string().optional(),
        screenshots: z.array(z.string()).optional(),
      }).optional(),
      controllerSupport: z.array(z.string()).optional(),
    })
  });

export const collections = {
  blog,
  devlog,
  games,
};

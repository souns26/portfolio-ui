import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImage: z.object({
        url: z.string(),
        alt: z.string()
      }),
      platform: z.string(),
      stack: z.string(),
      website: z.string(),
      link: z.string()
    })
});

const resumeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    subtitle: z.string(),
    description: z.string(),
  })
});

export const collections = {
  freelance: projectsCollection,
  product: projectsCollection,
  experience: resumeCollection
};


export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  categories: string[]; // segments used in /category/[...segments]
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-post",
    title: "From Mockup to Next.js",
    excerpt: "How I translated my portfolio mockup into clean Next.js sections and routes.",
    date: "2026-03-30",
    categories: ["design", "ui"],
    content: [
      "This post exists to demonstrate Next.js dynamic routing with a single segment.",
      "The page is a Server Component that renders a feature component based on the slug param.",
    ],
  },
  {
    slug: "routing-notes",
    title: "Dynamic Routes: Slug, Catch-all, Optional Catch-all",
    excerpt: "Quick notes on implementing all 3 required patterns in the App Router.",
    date: "2026-03-15",
    categories: ["nextjs", "routing"],
    content: [
      "Single segment: /blog/[slug]",
      "Catch-all: /category/[...segments]",
      "Optional catch-all: /blog/date/[[...parts]]",
    ],
  },
  {
    slug: "fcfs-visualizer",
    title: "Building the FCFS Visualizer",
    excerpt: "Turning a scheduling algorithm into an interactive UI with React state.",
    date: "2026-02-11",
    categories: ["projects", "react"],
    content: [
      "The FCFS page demonstrates client-side state with useState and derived computations with useMemo.",
      "All logic stays inside a client component, keeping page files clean and rubric-compliant.",
    ],
  },
];

export async function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}


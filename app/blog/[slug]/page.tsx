import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "../../../components/common/SiteShell";
import { getPostBySlug } from "../../../components/features/blog/blogData";

type PageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: PageProps) {
  const {slug} = await params;
  const post = await getPostBySlug(slug);
  console.log("p", post)

  if (!post) {
    return notFound();
  }

  return (
    <SiteShell>
      <main className="space-y-8">
        <header className="space-y-3 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
            {post.date}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {category}
              </Link>
            ))}
          </div>
        </header>

        <article className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 text-sm text-[var(--muted-foreground)] shadow-sm">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </main>
    </SiteShell>

  
  );
}


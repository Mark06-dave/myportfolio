import Link from "next/link";
import { SiteShell } from "../../components/common/SiteShell";
import { blogPosts } from "../../components/features/blog/blogData";

const allCategorySegments = Array.from(
  new Set(blogPosts.flatMap((post) => post.categories)),
).sort();

export default function BlogPage() {
  return (
    <SiteShell>
      <main className="space-y-8">
        <header className="space-y-2 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Blog</p>
          <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Static mock posts used to demonstrate dynamic routing patterns.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {allCategorySegments.map((segment) => (
              <Link
                key={segment}
                href={`/category/${segment}`}
                className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {segment}
              </Link>
            ))}
            <Link
              href="/category/design/ui"
              className="rounded-full border border-dashed border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              design / ui
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition hover:border-[var(--primary)]"
              >
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  {post.date}
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{post.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-[var(--muted)] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                  Read post →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}


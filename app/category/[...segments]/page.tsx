import { SiteShell } from "../../../components/common/SiteShell";
import { blogPosts } from "../../../components/features/blog/blogData";

type PageProps = {
  params: { segments: string[] };
};

export default function CategoryPage({ params }: PageProps) {
  const { segments } = params;
  const joined = segments.join(" / ");

  const filtered = blogPosts.filter((post) =>
    segments.every((segment) => post.categories.includes(segment)),
  );

  return (
    <SiteShell>
      <main className="space-y-8">
        <header className="space-y-2 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
            Category
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">{joined}</h1>
        </header>

        <section className="space-y-3 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          {filtered.length === 0 ? (
            <p className="text-sm text-[var(--muted-foreground)]">
              No posts match this category path yet.
            </p>
          ) : (
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              {filtered.map((post) => (
                <li key={post.slug} className="flex justify-between gap-4">
                  <span>{post.title}</span>
                  <span className="text-xs uppercase tracking-wide">{post.date}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </SiteShell>
  );
}


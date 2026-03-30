import { SiteShell } from "../../../../components/common/SiteShell";
import { blogPosts } from "../../../../components/features/blog/blogData";

type PageProps = {
  params: { parts?: string[] };
};

export default function BlogByDatePage({ params }: PageProps) {
  const parts = params.parts ?? [];

  const [year, month, day] = parts;

  const filtered = blogPosts.filter((post) => {
    const [postYear, postMonth, postDay] = post.date.split("-");
    if (year && postYear !== year) return false;
    if (month && postMonth !== month) return false;
    if (day && postDay !== day) return false;
    return true;
  });

  const label =
    parts.length === 0
      ? "All dates"
      : [year, month, day].filter(Boolean).join(" / ");

  return (
    <SiteShell>
      <main className="space-y-8">
        <header className="space-y-2 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
            Blog · Date filter
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">{label}</h1>
        </header>

        <section className="space-y-3 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          {filtered.length === 0 ? (
            <p className="text-sm text-[var(--muted-foreground)]">
              No posts match this date filter yet.
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


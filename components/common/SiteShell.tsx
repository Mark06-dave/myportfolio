import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-10 sm:px-10 lg:px-12">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}


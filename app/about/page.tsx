import { SiteShell } from "../../components/common/SiteShell";
import { AboutSection } from "../../components/features/home/sections/AboutSection";

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="space-y-10">
        <AboutSection />
      </main>
    </SiteShell>
  );
}


import { SiteShell } from "../../components/common/SiteShell";
import { ProjectsSection } from "../../components/features/home/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="space-y-10">
        <ProjectsSection />
      </main>
    </SiteShell>
  );
}


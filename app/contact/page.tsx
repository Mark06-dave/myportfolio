import { SiteShell } from "../../components/common/SiteShell";
import { ContactSection } from "../../components/features/home/sections/ContactSection";

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="space-y-10">
        <ContactSection />
      </main>
    </SiteShell>
  );
}


import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import { Reveal } from "@/components/site/motion";
import { photos, boyzEditions } from "@/components/site/content";

const T = "Boyz 2 Men — Youth Mentorship in Rwanda | Equity Bridge Initiative";
const D = "Boyz 2 Men mentors boys aged 12–16 in Rwanda through retreats on values, responsibility, financial literacy and leadership. Edition 4: July 19–26, 2026.";

export const Route = createFileRoute("/boyz-2-men")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const themes = ["Leadership", "Responsibility", "Rwandan cultural values", "Financial responsibility", "Creativity", "Positive masculinity", "Healthy lifestyles", "Community responsibility"];

function Page() {
  return (
    <ProgrammePage
      eyebrow="Youth mentorship"
      title="Building responsible, confident and purpose-driven young men."
      lead="Boyz 2 Men — “from boyhood to manhood” — mentors boys aged about 12–16 through retreats and guided learning."
      hero={photos.boys1}
      facts={[["Status", "Current"], ["Ages", "12–16"], ["Editions", "4 (2023–2026)"], ["Edition 4", "July 19–26, 2026"]]}
      gallery={[
        { src: photos.boys2, alt: "Boys at a Boyz 2 Men mentoring session" },
        { src: photos.boys1, alt: "Boyz 2 Men retreat participants" },
        { src: photos.mgm17, alt: "Community activity" },
      ]}
    >
      <Reveal className="max-w-3xl">
        <p className="eyebrow">2023 → 2026</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Four editions of mentoring.</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {boyzEditions.map((e, k) => (
          <Reveal key={e.year} delay={k * 120} className="rounded-lg bg-card p-6 shadow-soft">
            <p className="font-display text-5xl text-accent">{e.year}</p>
            <p className="eyebrow mt-3">{e.ed}</p>
            <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16 flex flex-wrap gap-3">
        {themes.map((t) => (
          <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{t}</span>
        ))}
      </Reveal>
    </ProgrammePage>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import { Reveal } from "@/components/site/motion";
import { photos } from "@/components/site/content";

const T = "Zamuka Mugore — Women Empowerment in Rwanda | Equity Bridge Initiative";
const D = "Zamuka Mugore supports women in Rwanda with skills, savings groups, economic empowerment and advocacy — with Bank of Kigali (2022) and NUDOR (2026).";

export const Route = createFileRoute("/zamuka-mugore")({
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

const timeline = [
  ["November 2022", "With Bank of Kigali", "Bank of Kigali, in partnership with AMERWA, supported saving and development groups of women whose children were abandoned, helping them run income-generating activities together."],
  ["March 2–30, 2026", "With NUDOR", "Zamuka Mugore 2026 reached and supported more than 100 women through skills development, economic empowerment, advocacy and social support."],
];

function Page() {
  return (
    <ProgrammePage
      eyebrow="Women empowerment"
      title="Zamuka Mugore — rise up, woman."
      lead="Skills development, economic empowerment, advocacy and social support for greater independence."
      hero={photos.mgm36}
      facts={[["Status", "Current"], ["Latest edition", "March 2026"], ["Partner", "NUDOR"], ["Reached in 2026", "100+ women"]]}
      gallery={[
        { src: photos.mgm20, alt: "Participants at Zamuka Mugore 2026" },
        { src: photos.mgm17, alt: "Women at a community session" },
        { src: photos.mgm19, alt: "Women in a training activity" },
      ]}
    >
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Programme timeline</p>
        <h2 className="mt-3 text-4xl md:text-5xl">From savings groups to a growing movement.</h2>
      </Reveal>
      <div className="mt-12 space-y-10 border-l border-accent pl-8">
        {timeline.map(([when, who, text], k) => (
          <Reveal key={when} delay={k * 120} className="relative">
            <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-accent" />
            <p className="eyebrow">{when}</p>
            <h3 className="mt-1 text-2xl">{who}</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
    </ProgrammePage>
  );
}

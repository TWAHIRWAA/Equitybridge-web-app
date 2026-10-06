import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, User } from "lucide-react";
import { Reveal, Counter } from "@/components/site/motion";
import { VideoCard } from "@/components/site/chrome";
import { photos, impact, journey, programmes, partners, team, videos, mailto } from "@/components/site/content";

const TITLE = "Equity Bridge Initiative Rwanda — Bridging Opportunities, Transforming Lives";
const DESC =
  "Rwanda-based NGO growing from AMERWA's community work: women empowerment (Zamuka Mugore), youth mentorship (Boyz 2 Men), education and community development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const slides = [
  { img: photos.mgm36, label: "Zamuka Mugore · Women" },
  { img: photos.boys1, label: "Boyz 2 Men · Youth" },
  { img: photos.mgm17, label: "Community action" },
  { img: photos.mgm20, label: "Zamuka Mugore 2026" },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ink-foreground">
      {slides.map((s, k) => (
        <img
          key={s.img}
          src={s.img}
          alt={s.label}
          fetchPriority={k === 0 ? "high" : "low"}
          loading={k === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
            k === i ? "opacity-100 animate-kenburns" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-veil" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:pb-24">
        <p className="eyebrow mb-5 text-gold">Equity Bridge Initiative · Rwanda · Since AMERWA</p>
        <h1 className="max-w-4xl text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
          Bridging opportunities. <em className="text-gold">Transforming lives.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg opacity-90 md:text-xl">
          We work with communities to create pathways from vulnerability to opportunity through empowerment, mentorship, skills, innovation and partnerships.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#partner" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground transition hover:brightness-110">
            Partner With Us <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#journey" className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/40 px-7 py-4 font-semibold transition hover:bg-ink-foreground/10">
            Our Story <ArrowDown className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
          {slides.map((s, k) => (
            <button key={s.label} aria-label={`Show ${s.label}`} onClick={() => setI(k)} className={`h-0.5 transition-all ${k === i ? "w-12 bg-gold" : "w-6 bg-ink-foreground/40"}`} />
          ))}
          <span className="ml-3 opacity-80">{slides[i]?.label}</span>
        </div>
      </div>
    </section>
  );
}

function QuickFacts() {
  const facts = [
    ["Who we are", "A Rwanda-based organisation rooted in community work since AMERWA."],
    ["Who we serve", "Women, girls, boys, children and vulnerable families."],
    ["What's active", "Zamuka Mugore, Boyz 2 Men, Education, Green Savers, women's training."],
    ["How to collaborate", "Partner, sponsor, volunteer — or simply get in touch."],
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-px px-5 md:grid-cols-4">
        {facts.map(([h, t], k) => (
          <Reveal key={h} delay={k * 100} className="py-8 md:px-6">
            <p className="eyebrow">{h}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our journey</p>
          <h2 className="mt-3 text-4xl md:text-6xl">From supporting vulnerable children to a bridge of opportunity.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Equity Bridge grew from AMERWA (Association des Métis au Rwanda), led by Alain Numa. That experience shaped the broader mission that continues today.
          </p>
        </Reveal>
        <div className="relative mt-20">
          <Reveal variant="line-grow" className="absolute left-4 top-0 h-full w-px bg-accent md:left-1/2" />
          <div className="space-y-20 md:space-y-28">
            {journey.map((j, k) => (
              <div key={j.title} className={`relative grid items-center gap-8 pl-12 md:grid-cols-2 md:gap-16 md:pl-0`}>
                <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-8 ring-background md:left-1/2 md:top-1/2" />
                <Reveal variant="reveal-img" className={`overflow-hidden rounded-lg ${k % 2 ? "md:order-2" : ""}`}>
                  <img src={j.img} alt={j.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-1000 hover:scale-105" />
                </Reveal>
                <Reveal delay={150} className={k % 2 ? "md:pr-10 md:text-right" : "md:pl-10"}>
                  <p className="font-display text-sm text-accent">{String(k + 1).padStart(2, "0")} — {j.tag}</p>
                  <h3 className="mt-2 text-3xl md:text-4xl">{j.title}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{j.when}</p>
                  <p className="mt-4 text-muted-foreground">{j.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BridgeConcept() {
  const pairs = [
    ["Ideas", "Action"],
    ["Vulnerability", "Opportunity"],
    ["Skills", "Livelihoods"],
    ["Youth", "Mentorship"],
    ["Communities", "Resources"],
    ["Experience", "Scale"],
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <svg aria-hidden className="absolute inset-x-0 top-10 w-full opacity-30" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0 180 Q600 -60 1200 180" fill="none" stroke="currentColor" strokeWidth="2" className="bridge-flow text-gold" />
        {Array.from({ length: 13 }).map((_, k) => {
          const x = 100 + k * 83;
          const y = 180 - 240 * ((x / 1200) * (1 - x / 1200)) * 2;
          return <line key={k} x1={x} y1={y} x2={x} y2={180} stroke="currentColor" strokeWidth="1" className="text-gold" />;
        })}
        <line x1="0" y1="180" x2="1200" y2="180" stroke="currentColor" strokeWidth="2" className="text-gold" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal className="max-w-4xl pt-16">
          <p className="eyebrow text-gold">The idea in our name</p>
          <h2 className="mt-3 text-4xl md:text-6xl">We build bridges between potential and opportunity.</h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map(([a, b], k) => (
            <Reveal key={a} delay={k * 90} className="group flex items-center justify-between rounded-lg border border-ink-foreground/15 p-6 transition hover:border-gold">
              <span className="font-display text-2xl opacity-70">{a}</span>
              <span className="mx-4 h-px flex-1 bg-gradient-to-r from-ink-foreground/20 to-gold transition-all group-hover:mx-2" />
              <span className="font-display text-2xl text-gold">{b}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Our work</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Programmes that meet people where they are.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p, k) => {
            const inner = (
              <>
                <div className="overflow-hidden">
                  <img src={p.img} alt={`${p.name} programme`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">{p.area}</p>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.status}</span>
                  </div>
                  <h3 className="mt-3 text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  {p.to && <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></p>}
                </div>
              </>
            );
            return (
              <Reveal key={p.name} delay={(k % 3) * 100}>
                {p.to ? (
                  <Link to={p.to} className="group block h-full overflow-hidden rounded-lg bg-card shadow-soft">{inner}</Link>
                ) : (
                  <div className="group h-full overflow-hidden rounded-lg bg-card shadow-soft">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-20 overflow-hidden py-24 text-ink-foreground md:py-32">
      <img src={photos.mgm20} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-side" />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">Our impact</p>
          <h2 className="mt-3 text-4xl md:text-6xl">Every number is a person, a family, a step forward.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {impact.map((s, k) => (
            <Reveal key={s.label} delay={k * 120} className="rounded-lg border border-ink-foreground/20 bg-ink/40 p-6 backdrop-blur-sm md:p-8">
              <p className="font-display text-5xl text-gold md:text-6xl"><Counter to={s.n} suffix="+" /></p>
              <p className="mt-2 text-sm opacity-90">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["100+", "women reached by Zamuka Mugore 2026 with NUDOR, March 2–30, 2026"],
            ["4", "editions of Boyz 2 Men, 2023 → 2026"],
            ["11", "children whose school fees AMERWA was paying (March 2023)"],
          ].map(([n, t]) => (
            <div key={t} className="flex items-baseline gap-4 border-t border-ink-foreground/20 pt-4">
              <span className="font-display text-3xl text-gold">{n}</span>
              <span className="text-sm opacity-85">{t}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Stories() {
  const stories = [
    { tag: "Women · Zamuka Mugore", title: "Women find their voice", img: photos.mgm36, challenge: "Mothers whose children were abandoned faced economic and social isolation.", act: "Saving and development groups, supported with Bank of Kigali.", change: "Women running income-generating activities together and building confidence.", to: "/zamuka-mugore" as const },
    { tag: "Youth · Boyz 2 Men", title: "A boy discovers leadership", img: photos.boys2, challenge: "Teenage boys need guidance on values, responsibility and identity.", act: "A week-long retreat with mentors on Rwandan values, finance and creativity.", change: "Boys aged 12–16 returning home with purpose and practical life skills.", to: "/boyz-2-men" as const },
    { tag: "Community · Education", title: "A child gets a chance to learn", img: photos.mgm21, challenge: "School fees and family needs pushed children out of class.", act: "AMERWA paid school fees and supported mothers.", change: "In March 2023, 11 children were in school with fees paid.", to: undefined },
  ];
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Stories of change</p>
          <h2 className="mt-3 text-4xl md:text-6xl">Not slogans. People.</h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {stories.map((s, k) => (
            <Reveal key={s.title} delay={k * 120} className="flex flex-col overflow-hidden rounded-lg bg-card shadow-soft">
              <img src={s.img} alt={s.title} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow">{s.tag}</p>
                <h3 className="mt-2 text-2xl">{s.title}</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  {[["Challenge", s.challenge], ["Intervention", s.act], ["Change", s.change]].map(([d, t]) => (
                    <div key={d}><dt className="font-semibold">{d}</dt><dd className="text-muted-foreground">{t}</dd></div>
                  ))}
                </dl>
                {s.to && (
                  <Link to={s.to} className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-accent">Read story <ArrowRight className="h-4 w-4" /></Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Media() {
  return (
    <section id="media" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Watch our story</p>
          <h2 className="mt-3 text-4xl md:text-6xl">See our work in action.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {videos.map((v, k) => (
            <Reveal key={v.id} delay={k * 120}><VideoCard {...v} /></Reveal>
          ))}
        </div>
        <h3 className="mt-20 text-3xl">Media &amp; stories</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { tag: "Youth · July 19–26, 2026", title: "Boyz 2 Men Edition 4", text: "A seven-day retreat for boys aged 12–16 covering Rwandan cultural values, patriotism, avoiding substance abuse, financial responsibility and creativity.", img: photos.boys1, to: "/boyz-2-men" as const },
            { tag: "Women · March 2026", title: "Zamuka Mugore 2026", text: "Implemented March 2–30, 2026 with NUDOR, the programme reached and supported more than 100 women.", img: photos.mgm20, to: "/zamuka-mugore" as const },
          ].map((m, k) => (
            <Reveal key={m.title} delay={k * 120}>
              <Link to={m.to} className="group grid overflow-hidden rounded-lg bg-card shadow-soft sm:grid-cols-[180px_1fr]">
                <img src={m.img} alt={m.title} loading="lazy" className="h-48 w-full object-cover sm:h-full" />
                <div className="p-6">
                  <p className="eyebrow">Article · {m.tag}</p>
                  <h4 className="mt-2 font-display text-2xl">{m.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  const steps = ["Community impact", "Experience", "Services", "Earned income", "Reinvestment", "More community impact"];
  return (
    <section className="bg-sand/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Building a sustainable organisation</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Impact that helps fund more impact.</h2>
          <p className="mt-5 text-muted-foreground">
            Through <strong className="text-foreground">Marketing In Touch Agency</strong>, our team applies its experience in event preparation and related services. Fees earned contribute to sustaining Equity Bridge and its social work — part of how we think about long-term organisational resilience.
          </p>
        </Reveal>
        <ol className="relative space-y-3">
          {steps.map((s, k) => (
            <Reveal as="li" key={s} delay={k * 110} className="flex items-center gap-5 rounded-lg bg-card p-5 shadow-soft">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-primary-foreground">{k + 1}</span>
              <span className="font-display text-xl">{s}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 text-4xl md:text-6xl">The people behind the mission.</h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, k) => (
            <Reveal key={t.name} delay={k * 120} className="group">
              <div className="relative overflow-hidden rounded-lg bg-muted">
                {t.img ? (
                  <img src={t.img} alt={`Portrait of ${t.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                ) : (
                  <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                    <User className="h-16 w-16" />
                    <span className="text-xs uppercase tracking-widest">Photograph coming soon</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition duration-500 group-hover:scale-x-100" />
              </div>
              <h3 className="mt-5 text-2xl">{t.name}</h3>
              <p className="eyebrow mt-1">{t.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="eyebrow text-center">Our partners &amp; collaborators</p></Reveal>
        <div className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-3">
          {partners.map((p, k) => (
            <Reveal key={p.name} delay={k * 70} className="bg-card p-6 text-center md:p-8">
              <p className="font-display text-xl md:text-2xl">{p.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.link}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partner() {
  const btns = [
    { label: "Partner With Us", href: mailto("Partnership with Equity Bridge"), primary: true },
    { label: "Support Our Work", href: mailto("Supporting Equity Bridge's work") },
    { label: "Explore Our Programmes", href: "#work" },
    { label: "Contact Equity Bridge", href: mailto("Hello Equity Bridge") },
  ];
  return (
    <section id="partner" className="relative scroll-mt-20 overflow-hidden py-28 text-ink-foreground md:py-40">
      <img src={photos.boys1} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-veil" />
      <div className="absolute inset-0 bg-ink/40" />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
        <p className="eyebrow text-gold">Shared impact</p>
        <h2 className="mt-4 text-4xl md:text-7xl">Ready to build the next bridge?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          We believe meaningful change happens when communities, institutions and partners work together.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {btns.map((b) => (
            <a key={b.label} href={b.href} className={`rounded-full px-6 py-3.5 font-semibold transition ${b.primary ? "bg-accent text-accent-foreground hover:brightness-110" : "border border-ink-foreground/40 hover:bg-ink-foreground/10"}`}>
              {b.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <Journey />
      <BridgeConcept />
      <Work />
      <Impact />
      <Stories />
      <Media />
      <Sustainability />
      <Team />
      <Partners />
      <Partner />
    </>
  );
}

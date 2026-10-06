import type { ReactNode } from "react";
import { Reveal } from "./motion";
import { mailto } from "./content";

export function ProgrammePage({
  eyebrow,
  title,
  lead,
  hero,
  facts,
  children,
  gallery,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  hero: string;
  facts: [string, string][];
  children: ReactNode;
  gallery: { src: string; alt: string }[];
}) {
  return (
    <>
      <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt={title} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-veil" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-5xl md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">{lead}</p>
        </div>
      </section>
      <section className="border-b border-border bg-card">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {facts.map(([d, t], k) => (
            <Reveal key={d} delay={k * 90}>
              <dt className="eyebrow">{d}</dt>
              <dd className="mt-2 font-display text-xl">{t}</dd>
            </Reveal>
          ))}
        </dl>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">{children}</div>
      </section>
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3">
          {gallery.map((g, k) => (
            <Reveal key={g.src} variant="reveal-img" delay={k * 120} className={`overflow-hidden rounded-lg ${k === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-ink py-20 text-center text-ink-foreground">
        <h2 className="text-3xl md:text-5xl">Help this programme reach further.</h2>
        <a href={mailto(`Partnering on ${eyebrow}`)} className="mt-8 inline-block rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground">
          Partner With Us
        </a>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Play, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { CONTACT, mailto } from "./content";

const nav = [
  { href: "/#journey", label: "Our Journey" },
  { href: "/#work", label: "Our Work" },
  { href: "/#impact", label: "Impact" },
  { href: "/#media", label: "Media" },
  { href: "/#team", label: "Team" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-ink/95 py-3 backdrop-blur" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-ink-foreground">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Equity Bridge Initiative logo" className="h-10 w-10 rounded-full bg-card object-contain" />
          <span className="font-display text-lg leading-tight">
            Equity Bridge
            <span className="block text-[0.65rem] font-sans uppercase tracking-[0.2em] opacity-70">Initiative · Rwanda</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="opacity-80 transition hover:opacity-100">
              {n.label}
            </a>
          ))}
          <a href="/#partner" className="rounded-full bg-accent px-5 py-2.5 font-semibold text-accent-foreground transition hover:brightness-110">
            Partner With Us
          </a>
        </nav>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-4 text-ink-foreground lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-ink-foreground/10 py-3 font-display text-2xl">
              {n.label}
            </a>
          ))}
          <a href="/#partner" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-accent py-3 text-center font-semibold text-accent-foreground">
            Partner With Us
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <img src={logo} alt="" className="mb-4 h-14 w-14 rounded-full bg-card object-contain" />
          <p className="font-display text-2xl">Bridging Opportunities. Transforming Lives.</p>
        </div>
        <div className="space-y-3 text-sm opacity-85">
          <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="flex gap-3"><MapPin className="h-4 w-4 shrink-0" />{CONTACT.address}</a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex gap-3"><Phone className="h-4 w-4" />{CONTACT.phone}</a>
          <a href={mailto("Hello Equity Bridge")} className="flex gap-3"><Mail className="h-4 w-4" />{CONTACT.email}</a>
        </div>
        <div className="flex flex-col gap-2 text-sm opacity-85">
          <Link to="/zamuka-mugore">Zamuka Mugore</Link>
          <Link to="/boyz-2-men">Boyz 2 Men</Link>
          <a href="/#journey">Our Journey</a>
          <a href="/#partner">Partner With Us</a>
        </div>
      </div>
      <p className="border-t border-ink-foreground/10 py-6 text-center text-xs opacity-60">
        © 2026 Equity Bridge Initiative · Kigali, Rwanda
      </p>
    </footer>
  );
}

export function VideoCard({ id, title, text }: { id: string; title: string; text: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <>
      <button onClick={() => setOpen(true)} className="group relative block aspect-video w-full overflow-hidden rounded-lg text-left text-ink-foreground shadow-soft">
        <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-veil" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground transition group-hover:scale-110">
          <Play className="ml-1 h-6 w-6" fill="currentColor" />
        </span>
        <div className="absolute bottom-0 p-6">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-sm opacity-80">{text}</p>
        </div>
      </button>
      {open && (
        <div role="dialog" aria-label={title} className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 animate-in fade-in" onClick={() => setOpen(false)}>
          <button aria-label="Close video" className="absolute right-5 top-5 text-ink-foreground"><X className="h-8 w-8" /></button>
          <div className="aspect-video w-full max-w-5xl animate-in zoom-in-95">
            <iframe className="h-full w-full rounded-lg" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title={title} allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
          </div>
        </div>
      )}
    </>
  );
}

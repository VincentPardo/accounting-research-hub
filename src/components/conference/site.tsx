import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Linkedin, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  ["News", "/news"], ["Conferences", "/conferences"], ["About", "/about"], ["Programme", "/programme"], ["Speakers", "/speakers"],
  ["Call for Papers", "/call-for-papers"], ["Registration", "/registration"],
  ["Venue", "/venue"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-brand/15 bg-paper/90 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link to="/" aria-label="Accounting Research Day home" className="flex min-w-0 items-baseline gap-2" onClick={() => setOpen(false)}>
        <span className="truncate font-display text-xl font-semibold text-ink sm:text-2xl">Accounting Research Day</span>
        <span className="text-[10px] font-semibold uppercase text-gold">2026</span>
      </Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-4 2xl:flex">
        <Link to="/" activeOptions={{ exact: true }} className="nav-link">Home</Link>
        {navItems.map(([label, to]) => <Link key={to} to={to} className="nav-link">{label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild size="sm" className="hidden sm:inline-flex"><Link to="/registration">Register <ArrowRight /></Link></Button>
        <Button variant="ghost" size="icon" className="2xl:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </div>
    {open && <nav aria-label="Mobile navigation" className="border-t border-brand/10 bg-paper px-5 py-4 2xl:hidden">
      <div className="mx-auto grid max-w-7xl gap-1">
        <Link to="/" className="mobile-nav-link" onClick={() => setOpen(false)}>Home</Link>
        {navItems.map(([label, to]) => <Link key={to} to={to} className="mobile-nav-link" onClick={() => setOpen(false)}>{label}</Link>)}
        <Button asChild className="mt-3 sm:hidden"><Link to="/registration" onClick={() => setOpen(false)}>Register <ArrowRight /></Link></Button>
      </div>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-brand-deep text-paper">
    <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold">Accounting Research Day 2026</p>
          <p className="mt-2 text-sm text-paper/70">Ghent University</p>
          <p className="mt-5 text-sm text-paper/70">Contact: [EMAIL PLACEHOLDER]</p>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-gold">Navigate</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-paper/75">
            {navItems.slice(0, 8).map(([label, to]) => <Link key={to} to={to} className="footer-link">{label}</Link>)}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-gold">Elsewhere</p>
          <div className="mt-4 grid gap-2 text-sm text-paper/75">
            <a href="https://www.ugent.be/en" target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-1">UGent website <ExternalLink className="size-3" /></a>
            <Link to="/privacy" className="footer-link">Privacy policy</Link>
            <a href="https://www.linkedin.com/school/ghent-university/" target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-1"><Linkedin className="size-3.5" /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-paper/15 pt-6 text-xs text-paper/55">© 2026 Accounting Research Day · Ghent University · Conference details remain subject to confirmation.</div>
    </div>
  </footer>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4 flex items-center gap-3 text-brand"><span className="h-px w-8 bg-gold" />{children}</p>;
}

export function PageIntro({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="mx-auto max-w-7xl px-5 py-16 md:py-20 lg:px-8"><div className="max-w-3xl">
    <SectionLabel>{label}</SectionLabel><h1 className="font-display text-5xl font-semibold leading-[1.04] text-ink md:text-6xl">{title}</h1>
    <div className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">{children}</div>
  </div></div></section>;
}

export function GlassPanel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass-panel", className)}>{children}</div>;
}

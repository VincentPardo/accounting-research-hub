import { CalendarDays, Coffee, MapPin, MessageSquareText, Network, Search, UsersRound } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { GlassPanel, SectionLabel } from "./site";
import { programme, speakers, committee } from "@/lib/conference-data";

export function ProgrammeList({ limit }: { limit?: number }) {
  const items = limit ? programme.slice(0, limit) : programme;
  return <div className="overflow-hidden rounded-lg border border-brand/10 bg-card/65 backdrop-blur-xl">
    {items.map((item) => <article key={`${item.time}-${item.title}`} className="programme-row grid gap-2 border-b border-brand/10 px-5 py-5 last:border-b-0 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-6">
      <time className="font-semibold tabular-nums text-gold">{item.time}</time>
      <div><h3 className="font-semibold text-ink">{item.title}</h3><p className="mt-1 text-sm text-ink/60">{item.detail}</p></div>
      <span className="hidden text-xs uppercase text-muted-foreground md:block">{item.kind === "break" ? <Coffee className="size-4" /> : item.kind === "keynote" ? "Keynote" : "Session"}</span>
    </article>)}
  </div>;
}

export function SpeakerCard({ speaker, featured = false }: { speaker: (typeof speakers)[number]; featured?: boolean }) {
  return <article className={featured ? "grid overflow-hidden rounded-lg border border-brand/10 bg-card/60 backdrop-blur-xl lg:grid-cols-[1.05fr_.95fr]" : "overflow-hidden rounded-lg border border-brand/10 bg-card/60 backdrop-blur-xl"}>
    <img src={speaker.image} alt={`Placeholder portrait for ${speaker.name}`} width={1024} height={1280} loading="lazy" className={featured ? "h-full min-h-96 w-full object-cover" : "aspect-[4/4.6] w-full object-cover"} />
    <div className={featured ? "flex flex-col justify-center p-8 lg:p-10" : "p-5"}>
      {featured && <p className="eyebrow mb-3 text-gold">Featured keynote</p>}
      <h2 className={featured ? "font-display text-4xl font-semibold text-ink" : "font-display text-2xl font-semibold text-ink"}>{speaker.name}</h2>
      <p className="mt-2 text-sm font-medium text-brand">{speaker.title}</p>
      <p className="mt-1 text-sm text-ink/60">{speaker.institution}</p>
      <p className="mt-5 border-t border-brand/10 pt-5 text-sm leading-relaxed text-ink/70"><span className="font-semibold text-ink">Research area:</span> {speaker.area}</p>
      <p className="mt-4 text-xs text-muted-foreground">Fictional placeholder profile — replace before publication.</p>
    </div>
  </article>;
}

export function AboutHighlights() {
  const items = [
    [Search, "Research", "Present recent work across the breadth of accounting scholarship."],
    [MessageSquareText, "Discussion", "Exchange constructive feedback in focused, collegial sessions."],
    [Network, "Networking", "Build enduring links across institutions, disciplines and career stages."],
  ] as const;
  return <div className="grid gap-5 sm:grid-cols-3">{items.map(([Icon, title, copy], i) => <GlassPanel key={title} className="p-6">
    <div className="mb-5 flex size-10 items-center justify-center rounded-sm bg-brand/10 text-brand"><Icon className="size-5" /></div>
    <p className="mb-2 text-xs font-semibold text-gold">0{i + 1}</p><h3 className="font-display text-2xl font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink/65">{copy}</p>
  </GlassPanel>)}</div>;
}

export function CommitteeGrid() {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{committee.map((member) => <GlassPanel key={member.role} className="p-6">
    <div className="mb-8 flex size-11 items-center justify-center rounded-full bg-brand/10 text-brand"><UsersRound className="size-5" /></div>
    <p className="eyebrow text-gold">{member.role}</p><h3 className="mt-2 font-display text-2xl font-semibold text-ink">{member.name}</h3><p className="mt-2 text-sm text-ink/60">{member.detail}</p>
  </GlassPanel>)}</div>;
}

export function HomeSectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><SectionLabel>{label}</SectionLabel><h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">{title}</h2></div>{copy && <p className="max-w-md text-sm leading-relaxed text-ink/60">{copy}</p>}</div>;
}

export function DateLocation() {
  return <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/70"><span className="flex items-center gap-2 text-gold"><CalendarDays className="size-4" />[DATE]</span><span className="flex items-center gap-2"><MapPin className="size-4 text-gold" />Ghent University, Ghent, Belgium</span></div>;
}

export function RegistrationCallout() {
  return <section className="bg-brand-deep text-paper"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-14 md:flex-row md:items-center lg:px-8"><div><p className="eyebrow text-gold">Attend in Ghent</p><h2 className="mt-3 font-display text-4xl font-semibold">Join the conversation</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/70">Registration details and fees are placeholders until the conference committee confirms them.</p></div><Button asChild variant="paper" size="lg"><Link to="/registration">Register now</Link></Button></div></section>;
}

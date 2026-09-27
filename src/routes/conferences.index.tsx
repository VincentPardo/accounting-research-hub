import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionLabel } from "@/components/conference/site";
import { currentConference, previousConferences } from "@/data/conferences";

export const Route = createFileRoute("/conferences/")({
  head: () => ({ meta: [
    { title: "Conferences — Accounting Research Day" },
    { name: "description", content: "The current Accounting Research Day and all previous editions since 2013." },
    { property: "og:title", content: "Accounting Research Day Conferences" },
    { property: "og:description", content: "Current and previous editions of Accounting Research Day since 2013." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ConferencesPage,
});

function ConferencesPage() {
  const c = currentConference;
  return <><PageIntro label="Conferences" title="Conferences">The current edition and the full archive of previous editions since 2013.</PageIntro>
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <SectionLabel>Current / upcoming</SectionLabel>
      <div className="border-l-4 border-gold bg-mist p-6 md:p-8">
        <h2 className="font-display text-4xl font-semibold text-ink">{c.title}</h2>
        <p className="mt-2 text-sm text-ink/70">{c.date} · {c.location}</p>
        <p className="mt-4 max-w-3xl text-ink/75">{c.summary}</p>
        <Button asChild className="mt-6"><Link to="/conferences/$year" params={{ year: String(c.year) }}>Conference details <ArrowRight /></Link></Button>
      </div>
      <div className="mt-14"><SectionLabel>Previous conferences</SectionLabel>
        <ul className="divide-y divide-brand/15 border-y border-brand/15">
          {previousConferences.map((p) => <li key={p.year}><Link to="/conferences/$year" params={{ year: String(p.year) }} className="group flex items-center justify-between gap-4 py-4 hover:bg-mist/60">
            <span><span className="mr-4 font-semibold tabular-nums text-brand">{p.year}</span><span className="font-semibold text-ink">{p.title}</span><span className="ml-3 text-sm text-ink/60">{p.date} · {p.location}</span></span>
            <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
          </Link></li>)}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">Archive details are placeholders until historic records are supplied.</p>
      </div>
    </section></>;
}

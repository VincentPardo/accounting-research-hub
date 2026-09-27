import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionLabel } from "@/components/conference/site";
import { CURRENT_YEAR, getConference } from "@/data/conferences";

export const Route = createFileRoute("/conferences/$year")({
  beforeLoad: ({ params }) => { if (!getConference(Number(params.year))) throw notFound(); },
  head: ({ params }) => ({ meta: [
    { title: `Accounting Research Day ${params.year} — Conferences` },
    { name: "description", content: `Programme, speakers, papers and practical information for Accounting Research Day ${params.year}.` },
    { property: "og:title", content: `Accounting Research Day ${params.year}` },
    { property: "og:description", content: "Conference edition overview and materials." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const currentLinks = [
  ["Programme", "/programme"], ["Speakers", "/speakers"], ["Call for Papers & important dates", "/call-for-papers"],
  ["Registration", "/registration"], ["Venue", "/venue"], ["Contact", "/contact"],
] as const;

function Page() {
  const { year } = Route.useParams();
  const c = getConference(Number(year))!;
  const isCurrent = c.year === CURRENT_YEAR;
  const rows = [["Date", c.date], ["Location", c.location], ["Programme", c.programme], ["Speakers", c.speakers], ["Call for papers", c.callForPapers], ["Proceedings", c.proceedings], ["Photos", c.photos]] as const;
  return <><PageIntro label={isCurrent ? "Current conference" : "Previous conference"} title={c.title}>{c.summary}</PageIntro>
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:px-8">
      <div className="lg:col-span-7">
        <Button asChild variant="link" className="mb-6 px-0"><Link to="/conferences"><ArrowLeft />All conferences</Link></Button>
        <SectionLabel>Edition details</SectionLabel>
        <dl className="divide-y divide-brand/15 border-y border-brand/15">{rows.map(([k, v]) => <div key={k} className="grid grid-cols-[10rem_1fr] gap-4 py-3 text-sm"><dt className="font-semibold text-ink">{k}</dt><dd className="text-ink/70">{v ?? "—"}</dd></div>)}</dl>
        {c.links?.length ? <ul className="mt-6 space-y-1">{c.links.map((l) => <li key={l.url}><a href={l.url} className="text-brand hover:underline">{l.label}</a></li>)}</ul> : null}
      </div>
      {isCurrent && <aside className="lg:col-span-5"><SectionLabel>Conference information</SectionLabel>
        <ul className="divide-y divide-brand/15 border border-brand/15">{currentLinks.map(([label, to]) => <li key={to}><Link to={to} className="flex items-center justify-between px-5 py-3 font-semibold text-ink hover:bg-mist">{label}<ArrowRight className="size-4 text-brand" /></Link></li>)}</ul>
      </aside>}
    </section></>;
}

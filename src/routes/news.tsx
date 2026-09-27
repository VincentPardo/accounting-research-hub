import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/conference/site";
import { newsItems, type NewsItem } from "@/data/news";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [
    { title: "News — Accounting Research Day" },
    { name: "description", content: "Latest announcements and updates from the Accounting Research Day conference." },
    { property: "og:title", content: "Accounting Research Day News" },
    { property: "og:description", content: "Conference announcements, deadlines and programme updates." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

export function NewsLink({ item }: { item: NewsItem }) {
  if (!item.link) return null;
  if (item.link.startsWith("http")) return <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">Read more <ArrowRight className="size-4" /></a>;
  return <Link to={item.link} className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">Read more <ArrowRight className="size-4" /></Link>;
}

export function NewsFeed({ items }: { items: NewsItem[] }) {
  return <ol className="divide-y divide-brand/15 border-y border-brand/15">
    {items.map((item) => <li key={item.title} className="grid gap-4 py-6 sm:grid-cols-[8rem_1fr]">
      <div><time className="text-sm font-semibold text-gold">{item.date}</time><p className="mt-1 text-xs uppercase text-muted-foreground">{item.category}</p></div>
      <div className="flex gap-5">
        {item.image && <img src={item.image} alt="" className="hidden size-24 object-cover sm:block" loading="lazy" />}
        <div><h3 className="text-lg font-semibold text-ink">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-ink/70">{item.summary}</p><div className="mt-2"><NewsLink item={item} /></div></div>
      </div>
    </li>)}
  </ol>;
}

function Page() {
  return <><PageIntro label="News" title="News and announcements">Updates about the conference, deadlines, programme and practical arrangements, newest first.</PageIntro>
    <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8"><NewsFeed items={newsItems} /><p className="mt-4 text-xs text-muted-foreground">News dates are placeholders until confirmed.</p></section></>;
}

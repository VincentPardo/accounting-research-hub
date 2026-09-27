import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { NewsItem } from "@/data/news";

export function NewsLink({ item }: { item: NewsItem }) {
  if (!item.link) return null;
  if (typeof item.link === "string" && item.link.startsWith("http")) return <a href={item.link as string} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">Read more <ArrowRight className="size-4" /></a>;
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


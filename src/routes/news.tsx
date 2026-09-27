import { createFileRoute } from "@tanstack/react-router";
import { NewsFeed } from "@/components/conference/news";
import { PageIntro } from "@/components/conference/site";
import { newsItems } from "@/data/news";

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

function Page() {
  return <><PageIntro label="News" title="News and announcements">Updates about the conference, deadlines, programme and practical arrangements, newest first.</PageIntro>
    <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8"><NewsFeed items={newsItems} /><p className="mt-4 text-xs text-muted-foreground">News dates are placeholders until confirmed.</p></section></>;
}

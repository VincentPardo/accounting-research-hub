import type { LinkProps } from "@tanstack/react-router";

/** News records. Add new items anywhere; pages sort them newest first by `isoDate`. */
export type NewsItem = {
  /** Sortable date (YYYY-MM-DD). Use a placeholder date until confirmed. */
  isoDate: string;
  /** Date as shown to visitors. */
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
  /** Optional internal path (e.g. "/call-for-papers") or external URL. */
  link?: LinkProps["to"] | `http${string}`;
};

const items: NewsItem[] = [
  { isoDate: "2026-03-01", date: "[DATE]", category: "Announcement", title: "Accounting Research Day 2026 announced", summary: "Save-the-date details and the confirmed campus location will be published here.", link: "/conferences" },
  { isoDate: "2026-02-01", date: "[DATE]", category: "Call for Papers", title: "Call for papers opens", summary: "Submission requirements, research themes and the review timeline are available.", link: "/call-for-papers" },
  { isoDate: "2026-01-01", date: "[DATE]", category: "Programme", title: "Keynote announcement forthcoming", summary: "The featured keynote profile will be shared after formal confirmation.", link: "/speakers" },
];

export const newsItems = [...items].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

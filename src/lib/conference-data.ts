import keynote from "@/assets/keynote-professor.jpg";
import elise from "@/assets/speaker-elise.jpg";
import marc from "@/assets/speaker-marc.jpg";
import sofia from "@/assets/speaker-sofia.jpg";

export const programme = [
  { time: "09:00", title: "Registration & Coffee", detail: "Welcome desk · [Room placeholder]", kind: "break" },
  { time: "09:30", title: "Welcome & Opening Remarks", detail: "[Conference Chair] · Ghent University", kind: "session" },
  { time: "09:45", title: "Keynote Session", detail: "Dr. Thomas Vermeer [placeholder] · [Institution]", kind: "keynote" },
  { time: "11:00", title: "Research Session I", detail: "Financial & management accounting · [Speakers TBC]", kind: "session" },
  { time: "12:30", title: "Lunch", detail: "[Location placeholder]", kind: "break" },
  { time: "13:30", title: "Research Session II", detail: "Auditing & corporate reporting · [Speakers TBC]", kind: "session" },
  { time: "15:00", title: "Coffee Break", detail: "[Location placeholder]", kind: "break" },
  { time: "15:30", title: "Research Session III", detail: "Capital markets & governance · [Speakers TBC]", kind: "session" },
  { time: "17:00", title: "Closing Remarks", detail: "[Conference Chair] · Ghent University", kind: "session" },
  { time: "17:30", title: "Networking Reception", detail: "[Location placeholder]", kind: "break" },
] as const;

export const speakers = [
  { name: "Dr. Thomas Vermeer", title: "Professor of Accounting [placeholder]", institution: "[University / Institution]", area: "Corporate governance and firm value", image: keynote, featured: true },
  { name: "Prof. Elise Van Acker", title: "Professor of Financial Accounting [placeholder]", institution: "[University / Institution]", area: "ESG and sustainability reporting", image: elise },
  { name: "Dr. Marc De Wilde", title: "Associate Professor [placeholder]", institution: "[University / Institution]", area: "Auditing and assurance", image: marc },
  { name: "Dr. Sofia Martens", title: "Assistant Professor [placeholder]", institution: "[University / Institution]", area: "Management accounting and control", image: sofia },
] as const;

export const committee = [
  { name: "[Conference Chair]", role: "Conference chair", detail: "[Department / Faculty]" },
  { name: "[Academic Coordinator]", role: "Academic coordinator", detail: "[Department / Faculty]" },
  { name: "[Committee Member]", role: "Organising committee", detail: "[Department / Faculty]" },
  { name: "[PhD Representative]", role: "PhD representative", detail: "[Research group]" },
] as const;

export const topics = [
  "Financial accounting", "Management accounting", "Auditing", "Corporate reporting",
  "ESG and sustainability reporting", "Accounting information systems", "Capital markets research",
  "Corporate governance", "Taxation", "Experimental and archival accounting research",
];

export { newsItems } from "@/data/news";
export const conferenceYears = Array.from({ length: 14 }, (_, index) => 2026 - index);

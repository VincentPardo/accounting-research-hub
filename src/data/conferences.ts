/** One record per edition. Replace placeholders as historic information becomes available. */
export type ConferenceEdition = {
  year: number;
  title: string;
  date: string;
  location: string;
  summary: string;
  programme?: string;
  speakers?: string;
  callForPapers?: string;
  proceedings?: string;
  photos?: string;
  links?: { label: string; url: string }[];
};

export const CURRENT_YEAR = 2026;

const overrides: Partial<Record<number, Partial<ConferenceEdition>>> = {
  2026: {
    location: "Ghent University, Ghent, Belgium",
    summary: "The current edition brings together accounting researchers, PhD candidates and academics for a day of research presentations, discussion and collaboration.",
  },
};

export const conferences: ConferenceEdition[] = Array.from({ length: CURRENT_YEAR - 2013 + 1 }, (_, i) => {
  const year = CURRENT_YEAR - i;
  return {
    year,
    title: `Accounting Research Day ${year}`,
    date: "[DATE]",
    location: "[LOCATION]",
    summary: `[SUMMARY OF THE ${year} EDITION]`,
    programme: "[PROGRAMME]",
    speakers: "[SPEAKERS]",
    callForPapers: "[CALL FOR PAPERS]",
    proceedings: "[PROCEEDINGS]",
    photos: "[PHOTO GALLERY]",
    ...overrides[year],
  };
});

export const currentConference = conferences.find((c) => c.year === CURRENT_YEAR)!;
export const previousConferences = conferences.filter((c) => c.year < CURRENT_YEAR);
export const getConference = (year: number) => conferences.find((c) => c.year === year);

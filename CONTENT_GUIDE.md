# Content guide

All editable content lives in data files; pages only display it.

| To change | Edit |
| --- | --- |
| News item | `src/data/news.ts` — add a record with `isoDate`, `date`, `title`, `summary`, optional `image`/`link`. Sorted newest first automatically. |
| Conference edition (any year) | `src/data/conferences.ts` — add details to `overrides` for that year. |
| Programme entry | `src/lib/conference-data.ts` → `programme` |
| Speaker | `src/lib/conference-data.ts` → `speakers` |
| Committee member | `src/lib/conference-data.ts` → `committee` |
| Call-for-papers topics | `src/lib/conference-data.ts` → `topics` |
| Important dates, prices, contact email | Search for `[DATE]`, `[PRICE]`, `[EMAIL PLACEHOLDER]` and replace. |

Keep placeholders in square brackets until information is officially confirmed.

# EARNet-inspired academic conference structure

## Current project assessment
- The project already uses React, TypeScript, TanStack Start, Tailwind, and separate route files; no rebuild or new framework is needed.
- Existing pages cover Home, About, News, Conferences, Programme, Speakers, Call for Papers, Registration, Venue, Contact, Privacy, and yearly conference details.
- Reusable pieces already exist for the header, footer, page introductions, buttons, programme rows, speaker cards, committee cards, registration form, and contact form.
- Editable conference content is already separated into a central data module, including news, programme, speakers, committee, topics, and conference years.
- The current visual presentation is polished but still resembles a spacious modern event landing page more than the denser, established academic information structure in the new reference.

## Proposed changes
- Preserve the existing routes and reusable components, but reshape the shared layout into a more traditional academic conference site with a compact institutional header, highly visible navigation, restrained blue/red/white/black palette, moderate type sizes, square-edged content blocks, and minimal motion.
- Reorder and simplify navigation to Home, About, News, Conferences, Programme, Call for Papers, Registration, and Contact. Keep Speakers and Venue accessible from the current-conference content rather than overcrowding the primary navigation.
- Restructure the home page around the requested information hierarchy: current conference first, latest news, upcoming events, About summary, previous conferences, and organisational/contact information.
- Make News a chronological, information-dense feed with date, title, summary, optional image, and optional destination. Newest entries remain first.
- Divide Conferences clearly into Current/Upcoming and Previous Conferences. Keep one clickable detail page per year and make the 2026 edition visually prominent.
- Expand yearly conference data so each edition can independently hold title, date, location, summary, programme, speakers, call-for-papers details, proceedings, photos, and links. Unknown values remain clearly marked placeholders.
- Make the 2026 conference page a practical hub linking its overview, programme, speakers, paper presentations, important dates, registration, venue, and contact information.
- Retain all existing accessible labels, keyboard behavior, responsive mobile menu, English-only interface, route-specific metadata, and demonstrative non-payment forms.

## Content maintenance
- Split the current central data module into small purpose-specific files for site details, news, conferences, programme, speakers, and committee information.
- Keep presentation components independent from content, so future administrators update short structured records rather than page markup.
- Add a short maintainer guide explaining where to add a news item, conference edition, programme entry, speaker, important date, or contact detail.
- Continue using structured files for this first version; a database or CMS would add unnecessary complexity until multiple non-technical editors or browser-based editing are required.

## Verification
- Check every public page and yearly archive URL on desktop, laptop, tablet, and mobile.
- Verify the collapsed navigation, chronological news order, 2013–2026 archive links, form confirmation states, keyboard focus, text contrast, overflow, and unique page metadata.
- Confirm that no factual dates, prices, speakers, addresses, or official university claims were invented.

## Technical details
- Promote `/conferences` to a layout with an index child and yearly detail children so each archive page renders correctly.
- Use TanStack Router links and existing semantic design tokens throughout.
- Use the uploaded screenshots only as structural references; do not embed or reproduce EARNet branding or artwork.

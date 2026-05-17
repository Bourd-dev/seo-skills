# Page experience

Use this when auditing whether important pages provide the kinds of experiences Google explicitly asks site owners to self-assess.

## Core checks

- Core Web Vitals
- secure delivery
- mobile presentation
- ad load that distracts from or interferes with the main content
- intrusive interstitials
- whether visitors can easily distinguish the main content from other content on the page

## Reporting guidance

- Assess the overall experience; do not reduce the whole judgment to a single score.
- Prefer representative templates over isolated URLs.
- Separate measurable technical issues from visible UX problems that need human review.

## When Core Web Vitals field data is unavailable

Google's PageSpeed Insights and the Chrome User Experience Report (CrUX) supply Core Web Vitals from real Chrome traffic. Sites with low traffic, recent origins, or insufficient sample volume do not appear in the CrUX dataset. Google's documentation distinguishes this field data from lab data produced by tools like Lighthouse.

- When field data is unavailable, record that fact directly in the audit rather than asserting that the site passes or fails Core Web Vitals.
- Lab measurements (Lighthouse, PageSpeed Insights' lab section) can be reported as a separate, labelled signal. They describe a single test run under controlled conditions, not real-user experience, and Google does not present them as a ranking input.
- Do not invent a substitute pass/fail rubric from front-end characteristics. Report what was observed (origin not in CrUX, lab results from a specific Lighthouse run) and what would be needed to close the gap (real-user data via Search Console's Core Web Vitals report once the origin qualifies).

# Search performance

Use this when auditing how a site is performing in Google Search and whether enough measurement exists to support recommendations.

## Core frame

- Search Console is the source of truth for Google Search performance.
- Google Analytics is the source of truth for behavior after the visit.
- Use both together when available so search visibility and on-site usefulness are not confused.

## Core checks

- Search Console:
  - clicks
  - impressions
  - queries
  - landing pages
  - countries, devices, and search appearance when those dimensions matter
- Google Analytics:
  - organic sessions from Google
  - engagement rate
  - landing-page performance
  - key events, purchases, or subscriptions when available

## Useful comparisons

- current period versus previous period
- current period versus year-over-year when seasonality is plausible
- site-wide trend versus page-group or landing-page trend
- visibility measures versus engagement measures
- where available, compare Search Console landing-page visibility with Google Analytics landing-page engagement to spot pages that attract visits but may not satisfy users

## Reporting guidance

- Do not treat Google Analytics and Search Console totals as if they should match exactly; they measure different things.
- Prefer a small number of decision-relevant slices over dashboard theater.
- If the problem is a traffic decline, hand off to a dedicated drop diagnosis rather than turning a baseline audit into incident response.

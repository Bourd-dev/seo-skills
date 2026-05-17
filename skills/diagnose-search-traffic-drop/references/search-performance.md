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

## Core Web Vitals

Core Web Vitals (LCP, INP, CLS) come from two distinct sources, and the two must never be blended into a single verdict.

- **CrUX field data** is real-user 75th-percentile data from the Chrome User Experience Report. This is the data Google references as a ranking signal. Read URL-level CrUX first; fall back to origin-level CrUX as a labelled fallback when URL-level data is not present.
- **Lighthouse lab data** comes from a single controlled test run. It is not a ranking signal. Report lab data only as a separate labelled signal alongside field data. Never let it stand in as a substitute.

When no CrUX field data is available for the URL or its origin, record the absence as an unknown rather than inferring a Core Web Vitals verdict from lab data.

### Acquiring the data

In rough order of preference:

- Search Console Core Web Vitals report (Experience → Core Web Vitals), or a user-supplied CrUX export.
- PageSpeed Insights API. Returns CrUX field data (when present) and Lighthouse lab data in one response. Call both `strategy=mobile` and `strategy=desktop`; mobile is the form factor used for ranking. The API requires a free API key as of mid-2026: the keyless default project quota is 0 requests/day, recognisable by the `quota_limit_value: 0` field on a 429 response.
- CrUX BigQuery dataset or the CrUX History API for historical or aggregated field data.

### Reading a PageSpeed Insights response

1. `loadingExperience.metrics`: URL-level CrUX field data. Report as the primary signal when present.
2. `originLoadingExperience.metrics`: origin-level CrUX field data. Report as a labelled fallback when URL-level is absent.
3. `lighthouseResult.audits`: lab data. Always present. Label every reported number as lab; never let it stand in for a field verdict.

### Reporting rules

- Label every reported Core Web Vitals number with its source (URL-level CrUX, origin-level CrUX, or lab).
- Do not invent a substitute pass/fail rubric from front-end characteristics. Report what the data source actually returned and what would be needed to close any gap.
- Run both mobile and desktop when fetching; report each separately.
- File Core Web Vitals findings under category `page-experience` in the audit output contract.

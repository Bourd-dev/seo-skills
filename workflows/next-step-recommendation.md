# Next-step recommendation workflow

Use this workflow when the user asks what to do next to improve SEO, AEO, or GEO after some understanding of the site already exists.

```text
audit-site-overview
-> relevant audit skills as needed
-> merge-audit-findings when multiple audit skills contribute
-> analyze-query-performance when Search Console query data can refine growth choices
-> analyze-search-demand-trends when external demand, seasonality, or market differences matter
-> map-search-intent when query meaning or page fit is ambiguous
-> map-search-opportunities when growth, not repair, is the binding constraint
-> shape-comparison-pages when a comparison-query opportunity is one of the strongest surviving growth candidates, or when an existing comparison page needs review
-> review-seo-myths
-> suggest-next-seo-actions
```

## Sequence logic

1. Establish what the site is and which constraints are real.
2. Pull only the audit skills needed to resolve uncertainty.
3. When Search Console query data is available, use it to identify the strongest concrete opportunities.
4. When external demand, seasonality, or market differences matter, read Google Trends before ranking growth work.
5. When query meaning or page fit is unclear, map intent before choosing page types.
6. When the site is healthy enough for growth work, identify source-backed opportunities.
7. When a comparison-page opportunity survives, turn it into a review-grade brief before recommending it.
8. Reject unsupported SEO/AEO/GEO tactics before they enter the recommendation set.
9. Recommend the next highest-impact moves from evidence; avoid generic best-practice theater.

## Recommendation shape

Return:

- the dominant current constraint
- 3–5 ranked actions
- a `do now / test next / defer` ladder
- explicit assumptions

## Conditional inputs

Use these when they materially change the answer:

- `audit-search-performance`
- `audit-page-experience`
- `audit-media-seo`
- `audit-structured-data`
- `audit-business-presence`
- `audit-ecommerce-readiness`
- Search Console or analytics exports

The recommendation workflow should become broader only when the site is healthy enough that growth, not repair, is the binding constraint.

If the site is in an active decline, use `workflows/search-traffic-drop-diagnosis.md` before trying to rank growth opportunities.

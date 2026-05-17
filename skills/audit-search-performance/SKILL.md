---
name: audit-search-performance
description: Audit current Google Search performance using Search Console and Google Analytics evidence. Use when reviewing clicks, impressions, queries, organic sessions, landing-page performance, engagement, conversions, or whether the site has enough measurement to support SEO recommendations.
---

# Audit search performance

## Goal

Describe how the site is currently performing in Google Search and whether the available measurement is sufficient to guide decisions.

## Workflow

1. Read `references/search-performance.md`, `references/audit-output-contract.md`, and `references/opportunity-prioritization.md`.
2. Establish which data is available:
   - Search Console
   - Google Analytics
   - both
   - neither
3. When available, inspect:
   - Search Console clicks, impressions, queries, landing pages, and relevant breakdowns
   - Google Analytics organic sessions from Google, engagement, landing pages, and conversions or key events
4. Compare:
   - visibility versus behavior after the click
   - current period versus prior period
   - current period versus year-over-year when seasonality may matter
   - site-wide trends versus representative page groups
   - Search Console landing-page visibility versus Google Analytics landing-page engagement when both are available
5. Separate:
   - healthy performance
   - performance gaps
   - measurement gaps
   - patterns that need a dedicated traffic-drop diagnosis

## Decision rules

- Search Console is the source of truth for Search performance; Google Analytics is the source of truth for on-site behavior.
- Do not treat differences between the tools as automatic defects.
- If the question is "what happened to our traffic?", hand off to `diagnose-search-traffic-drop`.

## Output

Produce:

- performance summary
- measurement-coverage summary
- top visibility and engagement patterns
- prioritized findings using the shared audit contract
- follow-up questions where more privileged data would change the recommendation

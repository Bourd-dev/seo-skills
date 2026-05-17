---
name: map-search-opportunities
description: Identify grounded SEO and AI-search growth opportunities from Search Console evidence, Google Trends, user needs, and current content coverage. Use when the user asks what topics, queries, or content gaps to pursue next after the site's main blockers are understood.
---

# Map search opportunities

## Goal

Find the next plausible growth opportunities from documented demand signals rather than generic topic ideation.

## Workflow

1. Read `references/search-opportunities.md`, `references/ai-search-guidance.md`, and `references/opportunity-prioritization.md`.
2. Confirm that foundational blockers are either resolved or already accounted for.
3. Gather, when available:
   - Search Console queries and pages
   - `analyze-query-performance` outputs when query-level prioritization is needed
   - `analyze-search-demand-trends` outputs when external demand, seasonality, or market differences matter
   - Google Trends top and rising queries when a lighter pass is sufficient
   - existing content coverage
   - known audience needs or business priorities
4. Look for:
   - queries with meaningful impressions but weak matching pages
   - low-position high-CTR queries where better coverage may materially help
   - rising relevant demand
   - seasonal demand worth preparing for ahead of the peak
   - market-specific demand where region or language changes the opportunity
   - important user needs not yet answered well on the site
   - existing useful pages that should be refreshed or deepened because demand has shifted
5. Separate:
   - immediate opportunities
   - emerging opportunities
   - ideas with insufficient evidence
6. Hand the strongest candidates to `suggest-next-seo-actions` for final prioritization against audit constraints and effort.

## Decision rules

- Do not recommend mass-producing pages for every query variant.
- Prefer useful, differentiated content opportunities over thin coverage expansion.
- Do not treat trendiness alone as strategic fit.

## Output

Produce:

- opportunity map
- top candidate opportunities with evidence
- existing-demand versus emerging-demand split
- assumptions and missing data that could change the ranking

## Before returning output

Run these checks against the draft before handing it back.

1. Foundational blockers are confirmed resolved or explicitly accounted for. Opportunity work that sits on top of a crawl or index blocker is named as such, not silently recommended.
2. Trendiness on its own is not strategic fit. Each candidate carries a fit check: business, audience, and existing coverage.
3. Existing-demand and emerging-demand candidates are split, not merged. The two require different evidence and different timelines, and the split keeps both legible.
4. Verbs name their object. A query is not "an opportunity" without naming the measure that makes it one (impression volume, low position with high CTR, rising demand, market gap).
5. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").

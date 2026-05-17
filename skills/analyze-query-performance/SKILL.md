---
name: analyze-query-performance
description: Analyze Search Console query performance to surface optimization opportunities from click-through rate, average position, clicks, and device patterns. Use when classifying query groups, identifying low-position high-CTR opportunities, investigating top-position low-CTR queries, or deciding whether a query needs a new page, better coverage, or no action.
---

# Analyze query performance

## Goal

Turn Search Console query data into a small set of decision-ready opportunities using the analysis pattern Google documents for bubble charts.

## Workflow

1. Read `references/query-performance.md`, `references/search-performance.md`, and `references/opportunity-prioritization.md`.
2. Gather Search Console query data with:
   - CTR
   - average position
   - clicks
   - query
   - device when useful
3. Group queries into:
   - top position, high CTR
   - low position, high CTR
   - low position, low CTR
   - top position, low CTR
4. For each important query group:
   - identify whether the query is relevant
   - determine whether an adequate page already exists
   - decide whether the likely next move is:
     - create a page
     - improve an existing page
     - improve search appearance
     - ignore or deprioritize
5. Prefer the largest or most strategically relevant opportunities over exhaustive query review.
6. Hand surviving opportunities to `map-search-opportunities` or `suggest-next-seo-actions` when they need ranking against broader work.

## Decision rules

- Do not chase low-CTR queries that are irrelevant to the site.
- Do not assume every top-position low-CTR query is a problem; some users may already have the answer they needed.
- Treat the chart as a prioritization aid, not a complete explanation.

## Output

Produce:

- query-performance summary
- quadrant breakdown
- prioritized query opportunities
- recommended action for each surviving opportunity

## Before returning output

Run these checks against the draft before handing it back.

1. The four quadrants are preserved. A flattened "top opportunities" list with no quadrant context hides the basis for each recommendation.
2. Every action ties to a specific quadrant signal. "Improve CTR" without naming why the query is low-CTR is a guess wearing a verb.
3. Relevance to the site has been checked before treating any low-CTR query as a problem. Irrelevant queries are dropped, not optimised.
4. Verbs name their object. A query is not "performing" or "underperforming" without saying at what.
5. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").

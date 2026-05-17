---
name: diagnose-search-traffic-drop
description: Diagnose declines in organic Google Search traffic using the causes and analysis steps Google documents. Use when clicks, impressions, rankings, or organic traffic have fallen and the task is to determine whether the cause is technical, algorithmic, security-related, spam-related, seasonal, migration-related, or demand-driven.
---

# Diagnose search traffic drop

## Goal

Explain the most likely cause of an organic Google Search traffic decline and identify the next proof step or remediation path.

## Workflow

1. Read `references/search-traffic-drops.md`, `references/search-performance.md`, and `references/audit-output-contract.md`.
2. Inspect Search Console performance over a wide enough window to show context and seasonality.
3. Compare the decline period with:
   - the previous period
   - the same period year over year when relevant
4. Break down the change by:
   - queries
   - pages
   - countries
   - devices
   - search type or appearance when relevant
5. Check for the major documented cause families:
   - algorithmic update
   - technical issue
   - security issue
   - spam issue
   - seasonality or changing interest
   - site move or migration
6. Use `analyze-search-demand-trends` or Google Trends when needed to distinguish demand change from a site-specific problem.
7. Hand off to the relevant audit skill when the drop appears to be caused by:
   - technical eligibility
   - spam-policy risk
   - helpful-content weakness
   - migration or URL behavior

## Decision rules

- Do not treat every decline as a penalty.
- Do not overreact to small position changes when the page is otherwise performing well.
- Prefer the simplest explanation that matches the shape of the data.
- When evidence is inconclusive, say which next check would discriminate between causes.

## Output

Produce:

- drop summary
- likely cause ranking
- evidence for and against each likely cause
- next diagnostic step
- prioritized remediation path when the cause is sufficiently supported

## Before returning output

Run these checks against the draft before handing it back.

1. The cause ranking is grounded in the shape of the data: which queries, which pages, which countries, which devices, which dates. A ranking with no shape behind it is a guess.
2. Demand change has been separated from site-specific change, using Google Trends or `analyze-search-demand-trends` when the difference would matter.
3. Algorithmic-update attributions are only made when the update window and the drop window align. Otherwise the claim is held as "possible," not asserted.
4. Position-change observations are proportional. Small position movement on an otherwise healthy page is not a finding.
5. Where evidence is inconclusive, the next check that would discriminate between causes is named explicitly.
6. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").

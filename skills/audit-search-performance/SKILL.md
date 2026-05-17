---
name: audit-search-performance
description: Audit current Google Search performance using Search Console, Google Analytics, and Core Web Vitals field data (CrUX). Use when reviewing clicks, impressions, queries, organic sessions, landing-page performance, engagement, conversions, Core Web Vitals (LCP, INP, CLS), or whether the site has enough measurement to support SEO recommendations.
---

# Audit search performance

## Goal

Describe how the site is currently performing in Google Search and whether the available measurement is sufficient to guide decisions.

## Workflow

1. Read `references/search-performance.md`, `references/audit-output-contract.md`, and `references/opportunity-prioritization.md`.
2. Establish which data is available:
   - Search Console clicks, impressions, queries, landing pages
   - Core Web Vitals field data via Search Console (Experience → Core Web Vitals), a supplied CrUX export, or the PageSpeed Insights API
   - Google Analytics
3. When available, inspect:
   - Search Console clicks, impressions, queries, landing pages, and relevant breakdowns
   - Core Web Vitals per the "Core Web Vitals" section of `references/search-performance.md`: URL-level CrUX first, origin-level CrUX as a labelled fallback, lab data only as a separate labelled signal, explicit unknown when no field data is available
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

## Before returning output

Run these checks against the draft before handing it back.

1. Search Console totals and Google Analytics totals are not compared as if they should match. Differences between the two are explained, not treated as defects.
2. Every Core Web Vitals number carries its source label: URL-level CrUX, origin-level CrUX, or lab. Lab data is not used as a substitute for field data, and a missing field signal is recorded as unknown.
3. Where the question is "what happened to our traffic?", the work is handed to `diagnose-search-traffic-drop`. A baseline audit is not turned into incident response.
4. Verbs name their object. A page is not "performing well" without naming the measure (clicks, impressions, CTR, sessions, engagement, conversions).
5. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").

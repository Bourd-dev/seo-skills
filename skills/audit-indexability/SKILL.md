---
name: audit-indexability
description: Determine whether important existing-site URLs are eligible to appear in Google Search. Use when combining crawl access, response status, index directives, rendered content, and canonical signals into a page- or template-level indexability judgment.
---

# Audit indexability

## Goal

Answer the narrow but decisive question: if Google reaches this page, is it eligible to be indexed as the page the site appears to want indexed?

## Workflow

1. Read `references/technical-eligibility.md`, `references/search-essentials.md`, and `references/audit-output-contract.md`.
2. Reuse outputs from these skills when available:
   - `audit-crawlability`
   - `audit-http-and-directives`
   - `audit-js-rendering`
   - `audit-canonicalization`
3. For each representative URL, determine:
   - accessible to the crawler
   - successful final response
   - visible indexable content after rendering when relevant
   - no unintended exclusion directive
   - canonical relationship consistent with the intended indexed URL
4. Label each URL or template as:
   - indexable as intended
   - intentionally excluded
   - technically eligible but ambiguous
   - unintentionally non-indexable
5. If the evidence only shows possibility, record the unknown rather than overstating the conclusion.

## Decision rules

- Crawlable is not the same as indexable.
- Indexable is not the same as indexed or ranking.
- A canonical that points elsewhere changes the practical indexability story even when the current page has no `noindex`.
- If meaningful content appears only after rendering, incorporate the rendering result before concluding.

## Output

Produce:

- an indexability matrix by template or representative URL
- findings ordered by whether they block core business pages first
- clear follow-up checks for cases that require Search Console evidence

## Before returning output

Run these checks against the draft before handing it back.

1. Crawlable, indexable, indexed, and ranking are kept as four distinct verdicts. None of them is used as a synonym for another.
2. Canonical relationships are factored into the indexability call. A page with no `noindex` but a canonical pointing elsewhere is not labelled indexable as intended.
3. Where meaningful content appears only after rendering, the rendered DOM has been incorporated before concluding. Untested rendering is recorded as an unknown.
4. Possibility is not promoted to finding. If the evidence only supports "may be," it is recorded as a follow-up check, not as a verdict.
5. Verbs name their object. A page is not "blocked" or "excluded" without naming which signal does the work (directive, canonical, render gap, response code).
6. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").

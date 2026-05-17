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

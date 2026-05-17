---
name: audit-site-overview
description: Map an existing website's SEO audit scope before deeper inspection. Use when starting a site audit, triaging an unfamiliar domain, choosing representative URLs and templates, or deciding which specialist SEO audit skills should run next.
---

# Audit site overview

## Goal

Build the smallest truthful map of the site: what it is, which templates matter, which surfaces are likely high-risk, and which follow-up audits deserve attention first.

## Workflow

1. Read `references/site-audit-sampling.md`, `references/search-essentials.md`, and `references/audit-output-contract.md`.
2. Establish the available evidence surface: live site, crawl export, Search Console export, analytics export, repository, or a mix.
3. Identify the site's operating model: publisher, SaaS, local business, marketplace, ecommerce, documentation, forum, or mixed.
4. Inventory visible discovery surfaces:
   - homepage
   - navigation and footer
   - `robots.txt`
   - sitemap locations
   - major hubs, categories, or collections
   - important conversion paths
5. Group URLs into representative templates before drawing conclusions.
6. Note obvious red flags without trying to finish every specialist audit.
7. Recommend the next skills to run, in dependency order.

## Minimum output

Return:

- a one-paragraph site characterization
- a representative template map
- the current evidence available and missing
- a short list of highest-risk areas
- the next audit sequence
- findings formatted with `assets/audit-finding.schema.json` when the user wants machine-readable output

## Decision rules

- Prefer template-level conclusions over scattered URL anecdotes.
- Distinguish unknown from healthy.
- Do not let a polished homepage stand in for the whole site.
- If the site is large or templated, recommend `audit-crawlability`, `audit-indexability`, and `audit-js-rendering` before content strategy work.

## Handoff

Use this skill to feed:

- `audit-crawlability`
- `audit-http-and-directives`
- `audit-indexability`
- `audit-js-rendering`
- `audit-canonicalization`

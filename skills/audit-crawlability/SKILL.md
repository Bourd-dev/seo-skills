---
name: audit-crawlability
description: Audit whether important URLs on an existing site can be discovered and crawled. Use when checking robots rules, XML sitemaps, internal-link discovery, orphan pages, crawl paths, or whether search engines can reliably find key templates and sections.
---

# Audit crawlability

## Goal

Determine whether important pages are discoverable through legitimate crawl paths, separate from whether they should ultimately be indexed.

## Workflow

1. Read `references/technical-eligibility.md`, `references/site-audit-sampling.md`, and `references/audit-output-contract.md`.
2. Start from the site overview or build a representative URL sample.
3. Inspect discovery inputs:
   - `robots.txt`
   - XML sitemap files and sitemap indexes
   - homepage, navigation, footer, breadcrumbs, hubs, and pagination
   - internal links from representative templates
4. Trace whether important URLs can be reached from crawlable HTML links, not only from JavaScript events, forms, search boxes, or XML sitemaps.
5. Check for crawl waste and discovery dilution:
   - parameter explosions
   - faceted combinations
   - infinite spaces
   - duplicate URL variants
   - orphaned high-value pages
6. Separate three states:
   - discoverable and crawlable
   - discoverable but intentionally blocked
   - important but poorly discoverable or orphaned
7. Emit findings with representative evidence and hand off directive questions to `audit-http-and-directives`.

## Evidence to preserve

- matched robots rule where relevant
- sitemap inclusion or omission
- internal-link path or absence of one
- representative source URL and target URL
- crawl depth or template path when available

## Decision rules

- A URL in a sitemap is not automatically well integrated into the site.
- A URL blocked from crawling may still need a separate indexing recommendation.
- If a conclusion depends on JavaScript-generated links, pair with `audit-js-rendering` before finalizing it.

## Output

Produce:

- crawlability summary by template or section
- a list of orphaned or weakly discovered important URLs
- a list of crawl-waste patterns
- prioritized findings using the shared audit contract

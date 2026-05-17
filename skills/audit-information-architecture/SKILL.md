---
name: audit-information-architecture
description: Audit an existing site's hierarchy, hubs, categories, breadcrumbs, navigation, internal links, crawl paths, and orphan-page risk. Use when determining whether the site's structure makes important content discoverable and clear for people and search engines.
---

# Audit information architecture

## Goal

Determine whether the site teaches visitors and crawlers what matters, how pages relate, and where important content lives.

## Workflow

1. Read `references/information-architecture.md`, `references/site-audit-sampling.md`, and `references/audit-output-contract.md`.
2. Start from the representative template map produced by `audit-site-overview` when available.
3. Inspect:
   - global navigation and footer
   - hubs, categories, collections, and breadcrumbs
   - internal-link paths between templates
   - pagination or incremental-loading paths
   - orphaned or weakly linked important pages

   When navigation, breadcrumbs, or other architectural elements are absent from the server-rendered HTML on a client-side-rendered site, follow the dual-view procedure in `references/technical-eligibility.md` under "Head tags injected by client-side rendering" before asserting absence. Divergence between server-rendered and rendered-DOM link graphs is itself a finding worth recording.
4. Sketch the observed hierarchy and compare it with the site's actual business priorities.
5. Identify where the architecture becomes noisy, flat, misleading, duplicated, or too dependent on search, forms, or filters.
6. Pair with `audit-crawlability` if discoverability defects are technical rather than conceptual.

## Decision rules

- A large sitemap does not prove a coherent architecture.
- Prefer real browse paths over URL-shape assumptions.
- Treat "everything is one click from the homepage" as suspicious if the page relationships are still unclear.

## Output

Produce:

- a concise architecture map
- major page groups and their relationships
- orphan or weak-discovery risks
- prioritized findings using the shared audit contract

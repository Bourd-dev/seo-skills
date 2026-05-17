---
name: audit-js-rendering
description: Audit JavaScript-dependent pages on an existing site by comparing initial HTML with rendered output. Use when important content, links, metadata, canonicals, or structured data may depend on client-side rendering or when a JavaScript framework could hide SEO-critical signals.
---

# Audit JS rendering

## Goal

Check whether the crawler can still understand the page after JavaScript enters the room.

## Workflow

1. Read `references/technical-eligibility.md`, `references/search-essentials.md`, and `references/audit-output-contract.md`.
2. Choose representative templates where JavaScript is likely material: homepage, category, detail, search, faceted, infinite-scroll, and account-adjacent pages as relevant.
3. Compare initial HTML against rendered output for:
   - main content
   - internal links
   - title and meta description
   - robots directives
   - canonical tags
   - structured data
   - images and lazy-loaded assets

   For head-tag comparisons (canonical, robots meta, JSON-LD, hreflang), follow the dual-view procedure in `references/technical-eligibility.md` under "Head tags injected by client-side rendering". Treat divergence between raw HTML and rendered DOM as its own finding category.
4. Identify whether critical signals are:
   - present in initial HTML
   - present only after rendering
   - missing or materially altered after rendering
5. Look for blocked resources, client-side routing failures, hydration gaps, lazy-loading failures, and DOM-only links that never become crawlable anchors.
6. Pair with `audit-crawlability` and `audit-indexability` when the rendering outcome changes discovery or eligibility.

## Decision rules

- Rendering dependence is not automatically a defect; broken or delayed availability of critical signals is.
- Prefer evidence from real rendered DOM over assumptions based on framework choice.
- Separate user-visible layout problems from crawler-visible content problems when reporting.

## Output

Return:

- a before/after comparison by representative template
- high-risk missing or changed signals
- prioritized findings using the shared audit contract
- a note on whether server-side rendering, pre-rendering, or simpler HTML output would materially reduce risk

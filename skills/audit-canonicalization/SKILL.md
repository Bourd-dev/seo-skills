---
name: audit-canonicalization
description: Audit duplicate URL patterns and canonical signals on an existing site. Use when checking canonical tags, duplicate routes, parameterized URLs, protocol or hostname variants, paginated pages, or whether a site is declaring the intended preferred URL consistently.
---

# Audit canonicalization

## Goal

Determine whether the site gives consistent, credible signals about which URL should represent duplicate or near-duplicate content.

## Workflow

1. Read `references/technical-eligibility.md` and `references/audit-output-contract.md`.
2. Build a duplicate-risk sample including, where relevant:
   - HTTP vs HTTPS
   - `www` vs non-`www`
   - trailing slash variants
   - uppercase or lowercase variants
   - parameterized URLs
   - filtered, sorted, paginated, or campaign-tagged URLs
   - duplicate templates exposed through multiple paths
3. Inspect:
   - canonical tags or headers
   - redirect behavior
   - sitemap URLs
   - internal-link targets
   - whether canonical targets are themselves indexable and representative
4. Classify problems:
   - missing canonical where duplicates are material
   - conflicting canonicals across duplicate variants
   - canonical to an irrelevant or non-equivalent page
   - self-canonical on pages the site does not actually want surfaced
   - canonical signal contradicted by redirects, sitemaps, or internal links
5. Preserve representative duplicate clusters rather than listing noisy one-offs.

## Decision rules

- Canonicalization is a preference signal, not a repair spell for broken architecture.
- The canonical target should be a real equivalent that deserves to represent the cluster.
- Inconsistent internal links and sitemap entries weaken the declared preference even when the tag itself looks correct.

## Output

Produce:

- duplicate-pattern summary
- canonical consistency matrix
- prioritized findings using the shared audit contract
- follow-up checks where the correct preferred URL is a product or business decision

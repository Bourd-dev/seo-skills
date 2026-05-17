# Audit output contract

Use one compatible finding shape across audit skills so workflow playbooks can merge results without translation.

## Required fields

| Field | Meaning |
| --- | --- |
| `id` | Stable machine-readable identifier, preferably `<category>.<short-name>` |
| `category` | Audit family, one of: `crawlability`, `indexability`, `rendering`, `canonicalization`, `information-architecture`, `on-page`, `page-experience`, `media`, `structured-data`, `content-quality`, `trust-signals`, `business-presence`, `ecommerce`, `search-performance`, `spam`, `search-intent`, `search-opportunity` |
| `severity` | `critical`, `high`, `medium`, `low`, or `info` |
| `scope` | `site`, `template`, `url`, `asset`, `query`, or `property` |
| `summary` | One-sentence description of the issue |
| `evidence` | Concrete proof, not a hunch |
| `why_it_matters` | Search or user consequence |
| `recommendation` | Smallest sensible corrective action |
| `verification` | How to prove the issue is fixed |

Optional fields: `affected_urls`, `owner`, `estimated_effort`.

Use `schemas/audit-finding.schema.json` when machine-readable output is needed.

## Severity rubric

- `critical`: blocks discovery, indexing, or core site functionality at meaningful scale
- `high`: materially harms an important template, section, or conversion path
- `medium`: meaningful but bounded issue with a clear improvement path
- `low`: polish, minor inefficiency, or edge-case defect
- `info`: observation worth preserving but not a defect

## Evidence rules

- Prefer direct evidence: fetched URL, HTTP response, rendered HTML, robots directive, canonical tag, screenshot, or Search Console export.
- Distinguish observed facts from inferences.
- Do not report an issue when the evidence only shows possibility; record it as a follow-up check instead.
- Preserve a representative URL sample when a site-wide conclusion is inferred from templates.
- Every recommendation in a finding must rest on either (a) a directly observed fact about the audited site, or (b) a primary source — Google Search documentation (Search Essentials, technical requirements, spam policies, structured data, helpful-content guidance), the Agent Skills spec, or a standards body for the relevant surface (e.g. schema.org for structured data). Do not recommend a pattern Google or another primary source does not document.

## Tooling reliability

- HTTP responses, redirect chains, and `<head>` contents (canonical, robots meta, hreflang, JSON-LD, Open Graph) must be observed against the raw HTTP response, typically via `curl -sIL` for headers and `curl -s` for body. Tools that convert HTML to markdown or summarise rendered content can silently strip `<head>` elements and produce false negatives.
- When body content matters (visible copy, rendered text, link graph), a markdown-converting fetcher is acceptable. Pair it with a raw HTTP fetch when a finding depends on `<head>` evidence.
- If only one of the two views was used, record the limitation in `evidence` rather than asserting the absence of a tag whose presence the view cannot confirm.

## Final audit shape

A complete audit should usually contain:

1. **Executive summary**: the smallest truthful account of the site's condition
2. **Priority table**: sorted by impact and dependency order
3. **Findings**: contract-compatible findings with evidence
4. **Fix sequence**: what to do first, second, and later
5. **Unknowns**: checks that require Search Console, Analytics, log files, or stakeholder access

---
name: audit-page-experience
description: Audit page experience across the aspects Google explicitly asks site owners to assess. Use when checking Core Web Vitals, secure delivery, mobile presentation, excessive ads, intrusive interstitials, or whether important pages present main content that stands out from surrounding material.
---

# Audit page experience

## Goal

Determine whether representative pages provide an overall good experience across the page-experience aspects Google explicitly documents.

## Workflow

1. Read `references/page-experience.md`, `references/helpful-content-rubric.md`, and `references/audit-output-contract.md`.
2. Sample representative high-value templates.
3. Inspect:
   - Core Web Vitals where field data is available; when the origin is not in the CrUX dataset, follow the fallback in `references/page-experience.md` and report the absence rather than inferring a verdict
   - secure delivery
   - mobile presentation
   - excessive ads that distract from or interfere with the main content
   - intrusive interstitials
   - whether the main content stands out from surrounding material
4. Separate:
   - measurable technical issues
   - visible UX issues
   - unknowns that require field data or privileged tooling
5. Prefer an overall template-level judgment over isolated score chasing.

## Decision rules

- Do not reduce page experience to a single metric.
- Do not overstate conclusions when only lab data or a small sample is available.
- Pair with `audit-helpful-content` when the visible issue is really about whether the page satisfies people once they arrive.

## Output

Produce:

- page-experience summary by template
- prioritized findings using the shared audit contract
- follow-up checks for unavailable field data or ambiguous UX defects

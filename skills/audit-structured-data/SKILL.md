---
name: audit-structured-data
description: Audit structured data on an existing site for validity, relevance, completeness, truthfulness, and consistency with visible page content. Use when reviewing schema.org markup, rich-result eligibility, duplicate-page markup, or whether markup choices accurately represent the page.
---

# Audit structured data

## Goal

Judge whether the site's markup is syntactically sound, semantically truthful, and useful for the Search features it appears to target.

## Workflow

1. Read `references/structured-data-policies.md`, `references/audit-output-contract.md`, `references/search-essentials.md`, and `references/technical-eligibility.md`.
2. Inventory markup types by representative template. When JSON-LD is absent from a raw HTTP response on a client-side-rendered site, follow the dual-view procedure in `references/technical-eligibility.md` under "Head tags injected by client-side rendering" before asserting absence.
3. For each important type, inspect:
   - syntax validity
   - required and useful recommended properties
   - visible-page agreement
   - relevance of the chosen type
   - image and URL accessibility where referenced
   - consistency across duplicate pages when applicable
4. Separate:
   - invalid markup
   - valid but incomplete markup
   - valid but misleading or irrelevant markup
   - appropriate markup that is absent
5. Record which issues affect feature eligibility versus which are merely cleanup opportunities.

## Decision rules

- Valid JSON-LD can still be bad SEO if it misrepresents the page.
- Do not recommend markup merely because a feature exists.
- Do not treat structured data as a requirement for generative AI visibility or recommend invented AI-specific schema.
- Prefer the most specific truthful type over broad decorative schema.

## Output

Produce:

- markup inventory by template
- eligibility and truthfulness issues
- prioritized findings using the shared audit contract

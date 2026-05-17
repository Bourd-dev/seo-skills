---
name: audit-on-page-signals
description: Audit page-level interpretation signals on an existing site, including titles, visible headings, meta descriptions, anchor text, alt text, and how clearly the main content describes itself. Use when reviewing search appearance risk, template duplication, or whether pages send coherent signals about their subject.
---

# Audit on-page signals

## Goal

Assess whether important pages describe themselves clearly and consistently enough for people and Search systems to understand them.

## Workflow

1. Read `references/on-page-signals.md`, `references/search-essentials.md`, and `references/audit-output-contract.md`.
2. Sample representative pages across major templates.
3. Compare:
   - `<title>`
   - visible title and H1
   - meta description
   - key headings
   - image alt text where meaningful
   - internal anchor text pointing to the page
4. Look for:
   - duplicate titles or descriptions across important pages
   - vague or boilerplate titles
   - mismatch between visible heading and title
   - page copy too thin or generic to yield a strong snippet
   - misleading anchor text or unexplained destinations
5. Distinguish snippet quality from ranking guarantees.

## Decision rules

- A perfect meta description cannot rescue a page whose own content is vague.
- Report signal mismatch, not just missing keywords.
- Prefer template-wide patterns over isolated writing quibbles.

## Output

Return:

- a signal matrix by template or sampled page
- duplicated or conflicting patterns
- prioritized findings using the shared audit contract

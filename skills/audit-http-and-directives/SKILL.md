---
name: audit-http-and-directives
description: Inspect HTTP responses, redirect chains, robots.txt effects, robots meta tags, X-Robots-Tag headers, and related directives for existing site URLs. Use when determining whether technical responses or explicit indexing controls are blocking search visibility.
---

# Audit HTTP and directives

## Goal

Record the explicit technical signals a crawler receives before deciding whether a URL can participate in Search.

## Workflow

1. Read `references/technical-eligibility.md` and `references/audit-output-contract.md`.
2. Use a representative URL sample from `audit-site-overview` when available.
3. For each URL, collect:
   - initial and final status code
   - redirect chain
   - canonical final URL
   - robots.txt accessibility
   - robots meta directives
   - `X-Robots-Tag` headers
   - authentication or access barriers
4. Classify issues into:
   - hard blockers, such as access denied, server errors, or unintended `noindex`
   - confusing signals, such as redirect loops or conflicting directives
   - intentional controls that should be documented but not treated as defects
5. Distinguish crawling controls from indexing controls.
6. Preserve raw evidence before interpreting it.

## Decision rules

- Do not call a blocked URL "deindexed" merely because it is disallowed in `robots.txt`.
- Do not recommend `noindex` on pages that crawlers cannot access to read it.
- Treat unintended `200` soft-error pages as suspicious even though the HTTP code looks healthy.
- Escalate recurring template-wide defects above isolated URL defects.

## Output

Return:

- a response/directive matrix by URL or template
- prioritized findings using the shared audit contract
- a short list of intentional directives that should remain unchanged
- unknowns that require Search Console, logs, or stakeholder confirmation

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

## Before returning output

Run these checks against the draft before handing it back.

1. Crawling controls and indexing controls are kept distinct. A `robots.txt` disallow is reported as blocking discovery, not as a `noindex`.
2. Intentional directives are documented as intentional. They sit in their own short list, not in the defect set.
3. Soft-200 errors are flagged even when the status code looks healthy. A 200 returning an error page is a finding, not a pass.
4. `noindex` is never recommended on a URL the crawler cannot reach to read it. The recommendation pairs the directive change with the access change.
5. Verbs name their object. A URL is not "blocked" without naming the directive doing the blocking; not "broken" without naming which response, header, or body proves the break.
6. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").

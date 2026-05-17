# Technical site audit workflow

Use this workflow when a user wants the first serious pass over an existing site's technical SEO condition.

```text
audit-site-overview
-> audit-crawlability
-> audit-http-and-directives
-> audit-js-rendering
-> audit-canonicalization
-> audit-indexability
-> merge-audit-findings
```

## Sequence logic

1. Map the site before making claims about it.
2. Check discoverability before eligibility.
3. Capture raw responses and directives before synthesizing indexability.
4. Inspect rendering before trusting what the DOM appears to say on JavaScript-heavy sites.
5. Resolve duplicate-representative questions before the final indexability matrix.

## Final synthesis

Merge the outputs into:

- one executive summary
- one priority table
- one template-level findings set
- one dependency-aware fix sequence
- one list of unknowns that require privileged data

Use `references/audit-output-contract.md`, `references/finding-synthesis.md`, and `schemas/audit-finding.schema.json` for compatible findings.

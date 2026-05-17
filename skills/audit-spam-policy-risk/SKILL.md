---
name: audit-spam-policy-risk
description: Audit an existing site for likely violations of Google Search spam policies. Use when checking manipulative tactics, scaled content abuse, site reputation abuse, cloaking, doorway abuse, sneaky redirects, hidden text or links, link spam, thin affiliation, hacked content, or when a site may face manual-action or broad eligibility risk.
---

# Audit spam policy risk

## Goal

Identify whether the site shows confirmed or credible signs of behavior Google treats as search spam, separate from ordinary SEO weakness.

## Workflow

1. Read `references/spam-policies.md`, `references/search-essentials.md`, and `references/audit-output-contract.md`.
2. When internet access is available, verify the current Google Search spam-policy page before making a policy-level claim.
3. Start from suspicious patterns surfaced by:
   - `audit-site-overview`
   - `audit-helpful-content`
   - `audit-http-and-directives`
   - `audit-canonicalization`
   - `audit-information-architecture`
4. Inspect for:
   - deceptive presentation or access mismatch
   - manipulative page creation at scale
   - manipulative reputation or linking patterns
   - compromised, malicious, or abusive surfaces
5. Classify evidence as:
   - confirmed violation
   - strong indicator requiring escalation
   - ordinary quality issue, not a spam-policy finding
   - insufficient evidence
6. Preserve representative examples and distinguish what was observed from what is inferred.
7. If Search Console manual-action data is available, treat it as privileged evidence but still preserve the on-site pattern that likely caused it.

## Decision rules

- Do not relabel every weak page as spam.
- Do not call AI-assisted content a violation by itself; judge the manipulative pattern and user value.
- Prefer template- or system-level evidence over one-off anecdotes.
- Escalate high-confidence spam risk even when the site is technically healthy.

## Output

Produce:

- spam-risk summary by policy family
- confirmed violations versus indicators versus non-findings
- prioritized findings using the shared audit contract
- immediate containment or verification steps when the risk could affect broad Search eligibility

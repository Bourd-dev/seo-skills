---
name: audit-business-presence
description: Audit whether an official business has established an accurate presence across Google Search surfaces. Use when checking Search Console ownership, Business Profile setup, knowledge-panel information, organization details, or surfaced customer-support methods.
---

# Audit business presence

## Goal

Determine whether the business has given Google the official, accurate details it documents for recognition and contact across Search surfaces.

## Workflow

1. Read `references/business-presence.md`, `references/structured-data-policies.md`, and `references/audit-output-contract.md`.
2. Establish whether the entity is:
   - a local business
   - a broader organization
   - both
3. Inspect, where relevant:
   - verified website ownership in Search Console
   - claimed Business Profile
   - business address, contact details, type, and imagery
   - knowledge-panel information and update path
   - organization details represented through structured data
   - visible customer-support methods
4. Separate:
   - missing official setup
   - inaccurate or stale details
   - markup issues that belong in `audit-structured-data`
   - not-applicable checks

## Decision rules

- Do not turn this into local-ranking folklore.
- Treat official ownership and accurate business details as presence fundamentals, not growth hacks.
- Pair with `audit-structured-data` when the main defect is markup validity or truthfulness.

## Output

Produce:

- business-presence summary
- missing or inaccurate official details
- prioritized findings using the shared audit contract
- follow-up checks that require account access or business-owner confirmation

# Structured-data policies

Use this when auditing whether markup is useful, accurate, and eligible for Search features.

## Core checks

- Structured data must truthfully represent visible page content.
- Use the most specific applicable type that matches the page.
- Required properties must be present for the intended feature.
- Recommended properties should improve user usefulness, not pad markup.
- Images referenced in markup should be relevant, crawlable, and indexable.
- Duplicate pages may need equivalent markup, not markup only on the canonical.

## Common failure modes

- Marking up content users cannot see
- Choosing an irrelevant type just because it is eligible for a rich result
- Stale time-sensitive data
- Missing required properties
- Schema that disagrees with visible content or business reality

## Reporting guidance

- Separate syntax validity from feature eligibility and from truthfulness.
- Record the page, the markup type, the issue, and the user-visible mismatch if one exists.
